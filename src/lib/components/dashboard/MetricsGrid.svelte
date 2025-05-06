<script>
    import MetricCard from './MetricCard.svelte';
  
    const metrics = [
      { label: "Average Time to Hire", value: "32 days", trend: "↓ 3 days from last month", trendColor: "text-green-500" },
      { label: "Cost per Hire", value: "$2,140", trend: "↑ $120 from last month", trendColor: "text-red-500" },
      { label: "Quality of Hire", value: "85%", trend: "↑ 5% from last month", trendColor: "text-green-500" },
      { label: "Recruiter Efficiency", value: "42 apps/week", trend: "↑ 4 from last month", trendColor: "text-green-500" }
    ];
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    {#each metrics as m}
      <MetricCard {...m} />
    {/each}
  </div>
  