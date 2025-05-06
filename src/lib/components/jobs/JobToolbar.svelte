<script lang="ts">
    import JobTab from './JobTab.svelte';
    import JobCard from '../dashboard/JobCard.svelte';
    import { jobs } from '../../data/mockdata';
  
    let activeTab = 'Active';
  
    // Get counts
    const tabs = ['Active', 'Closed'].map(status => ({
      label: status,
      count: jobs.filter(job => job.status === status).length
    }));
  
    const filteredJobs = () => jobs.filter(job => job.status === activeTab);
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
          <button class="flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm text-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg>
            New Job
          </button>
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
  