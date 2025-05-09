<script>
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../components/ui/table';
  import ApplicationRow from './ApplicationRow.svelte';
  import { applications } from '$lib/data/applications.js';
</script>

<div class="bg-white rounded-xl shadow-sm p-4">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="py-2 px-4">Candidate</TableHead>
        <TableHead class="py-2 px-4">Position</TableHead>
        <TableHead class="py-2 px-4">Skills</TableHead>
        <TableHead class="py-2 px-4">Match</TableHead>
        <TableHead class="py-2 px-4">Status</TableHead>
        <TableHead class="py-2 px-4">Actions</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {#each applications as candidate}
        <ApplicationRow {candidate} />
      {/each}
    </TableBody>
  </Table>

  <div class="text-xs text-muted-foreground mt-4">
    Showing {applications.length} of 42 applications
  </div>
</div>
