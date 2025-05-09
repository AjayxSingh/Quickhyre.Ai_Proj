<script>
    export let candidate;
    import StatusBadge from './StatusBadge.svelte';
  </script>
  
  <tr class="border-b">
    <td class="py-3 px-4 flex gap-3 items-center">
      <img src="https://lh3.googleusercontent.com/a/ACg8ocJHvYRcfahZQYFP9jrugl8nNhKarW0j_nzTIXO-ILUBWGXQwQ=s96-c" class="w-8 h-8 rounded-full" alt="{candidate.name}'s profile picture" />
      <div class="mr-5">
        <div class="font-medium">{candidate.name}</div>
        <div class="text-xs text-muted-foreground">{candidate.email}</div>
      </div>
    </td>
    <td class="py-3 px-4">{candidate.position}<br /><span class="text-xs text-muted-foreground">{candidate.experience} exp</span></td>
    <td class="py-3 px-4 flex flex-wrap gap-1">{#each candidate.skills as skill}<span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">{skill}</span>{/each}</td>
    <td class="py-3 px-4 text-xs text-purple-700 bg-purple-50 rounded text-center">{candidate.match}</td>
    <td class="py-3 px-4"><StatusBadge label={candidate.status} /></td>
    <td class="py-3 px-4"><a href="Hello" class="text-sm font-medium text-blue-500">View</a></td>
  </tr>
  
