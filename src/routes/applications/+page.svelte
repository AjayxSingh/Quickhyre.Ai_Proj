<script lang="ts">
  import ApplicationTable from '$lib/components/dashboard/ApplicationTable.svelte';
</script>

<h1 class="text-3xl font-semibold mb-1">Applications</h1>
<p>Track and manage candidate applications for all positions.</p>
<input
      type="text"
      placeholder="Search Applications..."
      class="w-1/3 rounded-md border px-4 py-2 text-sm"
    />
<div class="space-y-6  mt-6 ">
  <ApplicationTable />
</div>

