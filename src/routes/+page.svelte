<script lang="ts">
    import { Card, CardContent } from "$lib/components/ui/card";
    import JobPostings from "$lib/components/dashboard/JobPostings.svelte";
    import HiringPipeline from "$lib/components/dashboard/HiringPipeline.svelte";
    import MetricsGrid from '../lib/components/dashboard/MetricsGrid.svelte';
  import ApplicationTable from '../lib/components/dashboard/ApplicationTable.svelte';
</script>
  
  <div class="p-6 space-y-6 ">
    <h1 class="text-2xl mb-1 font-bold">Recruiter Dashboard</h1>
    <p class="text-muted-foreground">Welcome back! Here's what's happening with your recruitment activities.</p>
  
    <!-- Top stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card><CardContent><p class="text-sm text-muted-foreground">Open Positions</p><h2 class="text-2xl font-bold">24</h2><p class="text-green-600 text-sm">+2 this week</p></CardContent></Card>
      <Card><CardContent><p class="text-sm text-muted-foreground">Active Candidates</p><h2 class="text-2xl font-bold">254</h2><p class="text-green-600 text-sm">+18 this week</p></CardContent></Card>
      <Card><CardContent><p class="text-sm text-muted-foreground">New Applications</p><h2 class="text-2xl font-bold">42</h2><p class="text-green-600 text-sm">+8 today</p></CardContent></Card>
      <Card><CardContent><p class="text-sm text-muted-foreground">Conversion Rate</p><h2 class="text-2xl font-bold">24%</h2><p class="text-red-600 text-sm">-2% this month</p></CardContent></Card>
    </div>
  
    <!-- Main Section -->
    <div class="flex flex-col lg:flex-row justify-between gap-6">
      <div class="w-full lg:w-1/2">
        <JobPostings />
      </div>
      <div class="w-full lg:w-1/2">
        <HiringPipeline />
      </div>
    </div>

    <!-- Metrics and Applications -->

      <MetricsGrid />

      <Card class="w-full flex justify-between flex-col  mb-4">
        <CardContent class="flex flex-row gap-10 justify-between mb-4">
          <div>
            <h2 class="text-xl font-semibold">Recent Applications</h2>
            <p class="text-sm text-muted-foreground">Latest candidate applications</p>
          </div>
          <button class="border rounded px-3 py-1 text-sm">Filter</button>
        </CardContent>

        <ApplicationTable />
      </Card>
  </div>

  