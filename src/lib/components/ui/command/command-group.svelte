<script>
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<CommandPrimitive.Group
	class={cn(
		"text-foreground [&_[data-cmdk-group-heading]]:text-black overflow-hidden p-1 [&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium",
		className
	)}
	{...$$restProps}
>
	<slot />
</CommandPrimitive.Group>
