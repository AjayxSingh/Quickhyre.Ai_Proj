<script>
    import ApplicationRow from './ApplicationRow.svelte';
    import { applications } from '$lib/data/applications.js';
  </script>
  
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
        {#each applications as candidate}
          <ApplicationRow {candidate} />
        {/each}
      </tbody>
    </table>
    <div class="text-xs text-muted-foreground mt-4">Showing {applications.length} of 42 applications</div>
  </div>
  