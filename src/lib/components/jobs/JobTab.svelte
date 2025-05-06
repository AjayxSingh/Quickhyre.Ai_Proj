<script lang="ts">
    export let label: string;
    export let count: number;
    export let active: boolean = false;
    export let onClick: () => void;
  </script>
  
  <button
    on:click={onClick}
    class={`px-4 py-2 text-sm transition-all border-b-2 ${
      active
        ? 'text-indigo-600 border-indigo-600 font-medium'
        : 'text-gray-500 border-transparent hover:text-indigo-500'
    }`}
  >
    {label} ({count})
  </button>
  