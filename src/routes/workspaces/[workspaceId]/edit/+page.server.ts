import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const formSchema = z.object({
	name: z.string(),
	role: z.enum(['admin', 'editor', 'viewer'])
});

export const load = async () => {
	const form = await superValidate(zod(formSchema));

	return {
		form,
		roleOptions: [
			{ label: 'Admin', value: 'admin' },
			{ label: 'Editor', value: 'editor' },
			{ label: 'Viewer', value: 'viewer' }
		]
	};
};

export const actions = {
	async default({ request }) {
		const form = await superValidate(request, zod(formSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	}
};
