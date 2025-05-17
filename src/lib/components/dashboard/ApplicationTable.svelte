<script>
  import ApplicationRow from './ApplicationRow.svelte';
  import * as Dialog from '$lib/components/ui/dialog';
  import { Input } from '$lib/components/ui/input';
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
  import { Button } from '$lib/components/ui/button';
  
  export let applications = [];

  let search = '';
  let activeTab = 'All';
  let currentPage = 1;
  const itemsPerPage = 10;

  $: tabs = ['All', 'New', 'In Review', 'Interview', 'Offer', 'Rejected'].map(status => ({
    label: status,
    count: status === 'All' ? applications.length : applications.filter(app => app.status === status).length
  }));

  $: filteredApplications = applications.filter(app => {
    const matchesStatus = activeTab === 'All' || app.status === activeTab;
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.position.toLowerCase().includes(search.toLowerCase()) ||
      app.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  $: totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

  $: paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function setActiveTab(tab) {
    activeTab = tab;
    currentPage = 1;
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
    }
  }

  // Dialog state and form fields for creating candidate
  let dialogOpen = false;
  let newName = '';
  let newEmail = '';
  let newAvatar = '';
  let newPosition = '';
  let newExperience = '';
  let newSkills = '';
  let newMatch = '';
  let newStatus = '';

  const statuses = ['New', 'In Review', 'Interview', 'Offer', 'Rejected'];

  function resetForm() {
    newName = '';
    newEmail = '';
    newAvatar = '';
    newPosition = '';
    newExperience = '';
    newSkills = '';
    newMatch = '';
    newStatus = '';
  }

  function submitCandidate() {
    if (!newName || !newPosition || !newStatus) {
      alert('Please fill in all required fields: Name, Position, Status');
      return;
    }

    applications = [
      ...applications,
      {
        name: newName,
        email: newEmail,
        avatar: newAvatar || `https://i.pravatar.cc/40?u=${encodeURIComponent(newEmail || newName)}`,
        position: newPosition,
        experience: newExperience,
        skills: newSkills.split(',').map(s => s.trim()).filter(s => s.length > 0),
        match: newMatch,
        status: newStatus,
      }
    ];

    resetForm();
    dialogOpen = false;
  }
</script>

<div class="bg-white p-5 border rounded-xl space-y-6 mt-6">
  <div class="flex justify-between items-center gap-4 mb-4">
    <input
      type="text"
      placeholder="Search Candidates..."
      class="w-1/3 rounded-md border px-4 py-2 text-sm"
      bind:value={search}
    />

    <div class="flex gap-2">
      <button class="flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm text-white" on:click={() => dialogOpen = true}>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg>
        Import Candidates
      </button>
    </div>
  </div>

  <Dialog.Root bind:open={dialogOpen}>

    <Dialog.Content class="sm:max-w-lg p-6 bg-white rounded-lg shadow-lg h-100vh" >
      <Dialog.Header>
        <Dialog.Title>Create New Candidate</Dialog.Title>
        <Dialog.Description>
          Fill in the details for the new candidate.
        </Dialog.Description>
      </Dialog.Header>
      <form on:submit|preventDefault={submitCandidate} class="space-y-4">
        <div>
          <label for="name" class="block mb-1 font-medium text-sm text-gray-700">Name</label>
          <Input id="name" type="text" bind:value={newName} required />
        </div>
        <div>
          <label for="email" class="block mb-1 font-medium text-sm text-gray-700">Email</label>
          <Input id="email" type="email" bind:value={newEmail} />
        </div>
        <div>
          <label for="avatar" class="block mb-1 font-medium text-sm text-gray-700">Avatar URL</label>
          <Input id="avatar" type="url" bind:value={newAvatar} />
        </div>
        <div>
          <label for="position" class="block mb-1 font-medium text-sm text-gray-700">Position</label>
          <Input id="position" type="text" bind:value={newPosition} required />
        </div>
        <div>
          <label for="experience" class="block mb-1 font-medium text-sm text-gray-700">Experience</label>
          <Input id="experience" type="text" bind:value={newExperience} />
        </div>
        <div>
          <label for="skills" class="block mb-1 font-medium text-sm text-gray-700">Skills (comma separated)</label>
          <Input id="skills" type="text" bind:value={newSkills} />
        </div>
        <div>
          <label for="match" class="block mb-1 font-medium text-sm text-gray-700">Match</label>
          <Input id="match" type="text" bind:value={newMatch} />
        </div>
        <div>
          <label for="status" class="block mb-1 font-medium text-sm text-gray-700">Status</label>
          <Select bind:value={newStatus} required>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {#each statuses as status}
                <SelectItem value={status}>{status}</SelectItem>
              {/each}
            </SelectContent>
          </Select>
        </div>
        <Dialog.Footer class="flex justify-end gap-2">
          <Dialog.Close asChild>
            <button type="button" class="rounded-md border border-gray-300 px-4 py-2 text-sm">
              Cancel
            </button>
          </Dialog.Close>
          <button type="submit" class="rounded-md bg-primary px-4 py-2 text-sm text-white">
            Create
          </button>
        </Dialog.Footer>
      </form>
    </Dialog.Content>
  </Dialog.Root>

  <div class="flex border-b border-gray-200 mb-4">
    {#each tabs as tab}
      <button
        class="px-4 py-2 -mb-px text-sm font-medium"
        class:text-purple-600={tab.label === activeTab}
        class:border-b-2={tab.label === activeTab}
        class:border-purple-600={tab.label === activeTab}
        class:text-gray-500={tab.label !== activeTab}
        on:click={() => setActiveTab(tab.label)}
      >
        {tab.label} ({tab.count})
      </button>
    {/each}
  </div>

  <div class="bg-white rounded-xl shadow-sm p-4">
    <table class="w-full text-sm">
      <thead class="text-left text-muted-foreground border-b">
        <tr>
          <th class="py-2 px-4">Candidate</th>
          <th class="py-2 px-4">Position</th>
          <th class="py-2 px-4">Skills</th>
          <th class="py-2 px-4">Match</th>
          <th class="py-2 px-4">Status</th>
          <th class="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each paginatedApplications as candidate}
          <ApplicationRow {candidate} />
        {/each}
      </tbody>
    </table>
    <div class="text-xs text-muted-foreground mt-4">Showing {paginatedApplications.length} of {filteredApplications.length} filtered applications</div>
  </div>

  <div class="flex  justify-center items-center gap-3 mt-6">
    <button
      class="px-4 text-sm py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      on:click={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
      aria-label="Previous page"
    >
      Previous
    </button>

    {#each Array(totalPages) as _, index}
      <button
        class="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
        class:bg-purple-600={index + 1 === currentPage}
        class:text-white={index + 1 === currentPage}
        on:click={() => goToPage(index + 1)}
        aria-current={index + 1 === currentPage ? 'page' : undefined}
        aria-label={"Page " + (index + 1)}
      >
        {index + 1}
      </button>
    {/each}

    <button
      class="px-4 py-2 text-smrounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      on:click={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      aria-label="Next page"
    >
      Next
    </button>
  </div>
</div>
