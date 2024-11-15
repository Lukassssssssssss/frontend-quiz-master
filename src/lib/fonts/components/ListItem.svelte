<script>
	let {icon, title, index, focusAction, correctAnswer} = $props();
	let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
</script>

<button class="alert flex focus:outline focus:outline-primary " onfocus={focusAction}>
	{#if icon}
		<img src={icon} alt={title} />
		{:else}
		<span>{ABC[index]}</span>
	{/if}
	<span>{title}</span>
</button>