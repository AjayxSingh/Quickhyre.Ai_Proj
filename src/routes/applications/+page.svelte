<script lang="ts">
  import ApplicationTable from '$lib/components/dashboard/ApplicationTable.svelte';
  import { applications } from '$lib/data/applications';
</script>

<h1 class="text-3xl font-semibold mb-1">Applications</h1>
<p>Track and manage candidate applications for all positions.</p>
<div class="space-y-6  mt-6 ">
  <ApplicationTable {applications} />
</div>

