import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
  const { session, user } = await parent();

  if (!session && !user) {
    throw redirect(302, '/login');
  }
};
