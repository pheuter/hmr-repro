<script lang="ts">
	let { data, children } = $props();
</script>

<a href="/" class="inline-block p-4 text-xl font-semibold">{data.workspace.name}</a>

<main class="mx-auto max-w-xl px-4">
	{@render children()}
</main>
