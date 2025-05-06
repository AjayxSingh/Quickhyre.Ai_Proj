<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import {Card} from "$lib/components/ui/card";
    import JobCard from "./JobCard.svelte";
    import { jobs } from "../../data/mockdata";
  </script>
  
  <Card class="w-full space-y-4">
    <div class="flex justify-between items-center p-4">
      <h2 class="text-xl font-semibold">Job Postings</h2>
      <Button>+ New Job</Button>
    </div>
  
    <div class="px-4 pb-4">
      {#each jobs as job}
        <JobCard {...job} />
      {/each}
    </div>
  </Card>