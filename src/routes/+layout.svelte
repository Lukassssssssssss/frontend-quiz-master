<script>
	import '../app.css';
	import "iconify-icon";

	let theme = "light";

	const switchTheme = () => {
		theme = theme === "dark" ? "light" : "dark";
	};
</script>

<div data-theme={theme} class="min-h-screen p-4 ">
	<div class="flex justify-end gap-2">
		<iconify-icon icon="lucide-sun" class="text-2xl"></iconify-icon>
		<input type="checkbox" 
		class="toggle border-none bg-white [--tglbg:#e9c46a] hover:bg-white " 
		checked="checked"
		on:click={switchTheme} />
		<iconify-icon icon="lucide-moon" class="text-2xl"></iconify-icon>
	</div>
	<slot />
</div>

