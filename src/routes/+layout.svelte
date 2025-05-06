<script>
	import '../app.css';
	import * as Command from '$lib/components/ui/command';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { routes, teamsRoutes } from '$lib/data/routesData.ts';
	import { Avatar, AvatarImage , AvatarFallback } from '$lib/components/ui/avatar';
	let sidebarCollapsed = writable(false);
	let currentPath = '';
	let sidebarOpen = false;

  
	function setActive(route) {
		goto(route.path);
		if (browser && window.innerWidth < 640) {
			sidebarOpen = false;
		}
	}

	onMount(() => {
		if (browser) {
			const checkScreenWidth = () => {
				sidebarCollapsed.set(window.innerWidth < 768);
				if (window.innerWidth >= 768) {
					sidebarOpen = false;
				}
			};
			checkScreenWidth();
			window.addEventListener('resize', checkScreenWidth);

			const unsubscribe = page.subscribe(($page) => {
				currentPath = $page.url.pathname;
			});

			return () => {
				window.removeEventListener('resize', checkScreenWidth);
				unsubscribe();
			};
		}
	});
</script>

<div class="flex h-screen">
	<!-- Mobile Toggle Button -->
	<button
		class="absolute top-4 left-4 z-50 sm:hidden bg-white border border-gray-300 rounded p-2 shadow"
		on:click={() => (sidebarOpen = !sidebarOpen)}
		aria-label="Toggle Sidebar"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clip-rule="evenodd" />
		</svg>
	</button>

	<!-- Sidebar -->
	<aside
		class="text-black border-r flex flex-col transition-all duration-300 ease-in-out z-40 bg-white top-0 left-0 h-full fixed sm:relative w-[15rem] sm:w-[15rem]"
		class:hidden={!sidebarOpen && browser && window.innerWidth < 640}
		class:translate-x-0={sidebarOpen || (browser && window.innerWidth >= 640)}
		class:-translate-x-full={!sidebarOpen && browser && window.innerWidth < 640}
	>
		<div class="h-16 p-4 flex items-center">
			<span class="w-7 h-7 flex items-center justify-center rounded text-white font-semibold text-lg bg-[#7056E8]">R</span>
			{#if !$sidebarCollapsed}
				<span class="text-xl font-semibold ml-2">RecruitAi</span>
			{/if}
		</div>
		<Separator class="my-2 border-x" />
		<Command.Root class="mt-1 w-full flex-1 overflow-y-auto overflow-x-hidden">
			<div class="ml-3">
				<Command.Input class="h-12 items-center justify-center font-medium" placeholder="Search..." />
			</div>
			<Command.List class="mt-4">
				<Command.Group heading="Main Contents">
					{#each routes as route}
						<a
							href={route.path}
							class={`flex items-center cursor-pointer rounded font-sm text-sm mx-2 px-2 py-1 ${route.path === currentPath && currentPath.startsWith(route.path) ? 'bg-deep-purple-100 text-deep-purple-700 hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-[rgb(229,222,255)] hover:text-black'}`}
							on:click={() => setActive(route)}
						>
							{@html route.icon}
							<span class="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{route.name}</span>
						</a>
					{/each}
				</Command.Group>
			</Command.List>
			<Command.List class="mt-4">
				<Command.Group heading="Teams">
					{#each teamsRoutes as route}
						<a
							href={route.path}
							class={`flex items-center cursor-pointer rounded font-sm text-sm mx-2 px-2 py-1 ${route.path === currentPath && currentPath.startsWith(route.path) ? 'bg-deep-purple-100 text-deep-purple-700 hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-[rgb(229,222,255)] hover:text-black'}`}
							on:click={() => setActive(route)}
						>
							{@html route.icon}
							<span class="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">{route.name}</span>
						</a>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</aside>

	<!-- Main Content -->
	<main class="bg-gray-100 flex-1 p-6 overflow-auto flex flex-col">
		<header class="flex justify-end items-center space-x-4 mb-4">
			<button aria-label="Notifications" class="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
			</button>
			<button class="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md bg-white hover:bg-gray-100" aria-label="User Profile">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
				<span class="text-sm">Inbox</span>
			</button>
			<div>
				<Avatar class="h-10 w-10">
				<AvatarImage src="https://randomuser.me/api/portraits/men/85.jpg" />
				<AvatarFallback>MW</AvatarFallback>
				</Avatar>
			</div>
		</header>
		<!-- Slot or main page content will be inserted here -->
		<slot />
	</main>
</div>
