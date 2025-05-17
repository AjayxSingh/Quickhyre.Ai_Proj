<script lang="ts">
    import { Card, CardContent } from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    export let title: string;
    export let status: string;
    export let tags: string[] = [];
    export let manager: string;
    export let details: string;
    export let applications: number;
  </script>
  
  <Card class="m-2 ">
    <CardContent class="flex justify-between flex-col sm:flex-row gap-4">
      <div>
        <h3 class="font-semibold text-lg">
          {title}
          <button class="ml-2 text-white {status === 'Active' ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 rounded-xl text-sm">{status}</button>
        </h3>
        <p class="text-sm text-muted-foreground">{details}</p>
        <div class="flex gap-2 mt-2 flex-wrap">
          {#each tags as tag}
            <span class="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">{tag}</span>
          {/each}
        </div>
        <p class="text-sm mt-2">Hiring Manager: {manager}</p>
      </div>
      <div class="flex flex-col items-end justify-between">
        <p class="text-sm text-muted-foreground">{applications} Applications</p>
        <div class="flex gap-2 mt-2">
          <Button variant="outline" size="sm">Edit</Button>
          <Button variant="outline" size="sm">View</Button>
        </div>
      </div>
    </CardContent>
  </Card>