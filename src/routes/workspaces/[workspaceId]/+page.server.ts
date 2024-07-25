import { redirect } from '@sveltejs/kit';

export const load = async ({ params: { workspaceId } }) => {
	redirect(303, `/workspaces/${workspaceId}/dashboard`);
};
