<script lang="ts" generics="T">
	import type { ComponentProps, Snippet } from 'svelte';
	import Select from 'svelte-select';

	interface Item {
		label: string;
		value: T;
	}

	interface Props extends ComponentProps<Select> {
		items: Item[];
		value: T | null;
		item?: Snippet<[Item]>;
		onchange?: (value: T | null) => void;
	}

	let { value = $bindable(), items, multiple, onchange, ...rest }: Props = $props();

	let selectedValue = $derived(items.find((item) => item.value === value));
</script>

<Select
	showChevron
	multiple={false}
	value={selectedValue}
	on:change={({ detail }) => {
		value = detail.value;
		onchange?.(value);
	}}
	on:clear={() => {
		value = null;
		onchange?.(null);
	}}
	{items}
	{...rest}
>
	<div slot="item" let:item>
		{#if rest.item}
			{@render rest.item(item)}
		{:else}
			{item.label}
		{/if}
	</div>
</Select>

<style lang="postcss">
	:global(.svelte-select) {
		border: 1px solid !important;
		@apply !mt-2 !border-border;
	}

	:global(.svelte-select .svelte-select-list) {
		border: 1px solid !important;
		@apply !w-full !border-border !bg-background !text-base !text-foreground sm:!text-sm;
	}

	:global(.svelte-select .list-item .item) {
		@apply !h-auto;
	}

	:global(.svelte-select .item) {
		@apply !text-foreground;
	}

	:global(.svelte-select .item.active, .svelte-select .item.hover) {
		@apply !bg-muted;
	}

	:global(.svelte-select .selected-item) {
		@apply !text-base !text-foreground sm:!text-sm;
	}
</style>
