<script>
	import { Command as CommandPrimitive } from "cmdk-sv";
	import Search from "lucide-svelte/icons/search";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
	export let value = "";
</script>
<div class="flex py-2 w-48 h-9 items-center justify-center rounded-lg border-2 border-transparent bg-gray-100 px-3 hover:border-black" data-cmdk-input-wrapper="">
	<Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
	<CommandPrimitive.Input
		class={cn(
			"placeholder:text-muted-foreground flex h-15 w-full rounded-md bg-transparent text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...$$restProps}
		bind:value
	/>
</div>	

