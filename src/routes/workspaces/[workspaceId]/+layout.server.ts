export const load = async () => {
	await new Promise((resolve) => setTimeout(resolve, 150));
	return { workspace: { name: 'My Workspace' } };
};
