<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import * as Form from '$lib/components/ui/form';
	import Select from '$lib/components/Select.svelte';
	import { Input } from '$lib/components/ui/input';

	let { data } = $props();

	const form = superForm(data.form);
	const { form: formData, enhance } = form;
</script>

<form class="space-y-4" method="post" use:enhance>
	<p class="text-lg">
		If you refresh/SSR on this page with HMR enabled, the Select component breaks.
	</p>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="role">
		<Form.Control let:attrs>
			<Form.Label>Role</Form.Label>
			<Select {...attrs} items={data.roleOptions} bind:value={$formData.role} />
		</Form.Control>
	</Form.Field>
	<div class="flex flex-col-reverse justify-end gap-4 md:flex-row">
		<Form.Button>Save</Form.Button>
	</div>
</form>
