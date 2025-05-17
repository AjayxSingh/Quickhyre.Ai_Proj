<script lang="ts">
    import JobTab from './JobTab.svelte';
    import JobCard from '../dashboard/JobCard.svelte';
    import { jobs } from '../../data/mockdata';
    import * as Dialog from '../ui/dialog';
    import { Input } from '$lib/components/ui/input';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
    let localData = [...jobs];

    let title = ""
    let status = "";
    let tags = "";
    let manager =  "";
    let details =  "";
    let applications = "" ;
    let dialogOpen = false;

    const s = ['Active', 'Closed'];

    function resetForm() {
     title = "";
     status= "";
     tags = "";
     manager =  "";
     details =  "";
     applications = "" ;
  }
  function submitJobs() {
    if (!title || !manager) {
      alert('Please fill in all required fields: Name, Position, Status');
      return;
    }

    localData = [
      ...localData,
      {
        title: title,
        status: status,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
        manager: manager,
        details: details,
        applications: parseInt(applications, 10) || 0,
      }
    ];

    resetForm();
    dialogOpen = false;
  }
    
  
    let activeTab = 'Active';
  
    // Get counts
    const tabs = ['Active', 'Closed'].map(status => ({
      label: status,
      count: localData.filter(localData => localData.status === status).length
    }));
  
    const filteredJobs = () => localData.filter(localData => localData.status === activeTab);
  </script>
  
 <div class="">
    <div class="flex justify-between items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          class="w-1/3 rounded-md border px-4 py-2 text-sm"
        />
      
        <div class="flex gap-2">
          <button class="flex items-center gap-1 rounded-md border bg-white px-3 py-2 text-sm text-black">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
              <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/>
            </svg>
            Filter
          </button>
          <button class="flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm text-white" on:click={() => dialogOpen = true}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
            New Job
          </button>

            <Dialog.Root bind:open={dialogOpen}>
              <Dialog.Content class="sm:max-w-lg p-6 bg-white rounded-lg shadow-lg h-100vh" >
                <Dialog.Header>
                  <Dialog.Title>New Jobs</Dialog.Title>
                  <Dialog.Description>
                    Fill in the details for the new Jobs.
                  </Dialog.Description>
                </Dialog.Header>
                <form on:submit|preventDefault={submitJobs} class="space-y-4">
                  <div>
                    <label for="title" class="block mb-1 font-medium text-sm text-gray-700">Title</label>
                    <Input id="title" type="text" bind:value={title} required />
                  </div>
                  <div>
                    <label for="manager" class="block mb-1 font-medium text-sm text-gray-700">Manager</label>
                    <Input id="namager" type="email" bind:value={manager} />
                  </div>
                  <div>
                    <label for="tags" class="block mb-1 font-medium text-sm text-gray-700">Tags (comma seperated)</label>
                    <Input id="tags" type="text" bind:value={tags} required />
                  </div>
                  <div>
                    <label for="details" class="block mb-1 font-medium text-sm text-gray-700">Details</label>
                    <Input id="details" type="text" bind:value={details} />
                  </div>
                  <div>
                    <label for="applications" class="block mb-1 font-medium text-sm text-gray-700">applications</label>
                    <Input id="applications" type="number" bind:value={applications} />
                  </div>
                  <div>
                    <label for="status" class="block mb-1 font-medium text-sm text-gray-700">Status</label>
                    <Select on:change={(e) => status = e.detail} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {#each s as status}
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
        </div>
        
      </div>
      
      <div class="flex bg-white border-b">
        {#each tabs as tab}
          <JobTab
            label={tab.label}
            count={tab.count}
            active={activeTab === tab.label}
            onClick={() => activeTab = tab.label}
          />
        {/each}
      </div>
      
      <div class="grid gap-4 py-4">
        {#each filteredJobs() as job (job.title)}
          <JobCard {...job} />
        {/each}
      
        {#if filteredJobs().length === 0}
          <p class="text-center text-muted-foreground text-sm py-10">No jobs found in this category.</p>
        {/if}
      </div>
 </div>
  