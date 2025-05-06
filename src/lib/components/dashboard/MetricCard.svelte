<script>
    export let label;
    export let value;
    export let trend;
    export let trendColor = "text-green-500";
  </script>
  
  <div class="p-4 rounded-xl bg-white border shadow-sm space-y-2 w-full">
    <div class="text-sm text-muted-foreground">{label}</div>
    <div class="text-2xl font-semibold">{value}</div>
    <div class={`text-xs ${trendColor}`}>{trend}</div>
  </div>
  