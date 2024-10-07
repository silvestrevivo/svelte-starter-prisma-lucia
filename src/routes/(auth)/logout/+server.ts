import { redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';

export const POST = async ({ locals, cookies }) => {
  const session = locals.session;

  if (!session) {
    throw redirect(302, '/');
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies.set(sessionCookie.name, sessionCookie.value, {
    path: '.',
    ...sessionCookie.attributes,
  });
  throw redirect(302, '/');
};
