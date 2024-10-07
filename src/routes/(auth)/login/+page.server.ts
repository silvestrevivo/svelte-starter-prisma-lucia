import { fail, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { compare } from 'bcrypt';

export const actions = {
  default: async ({ request, cookies }) => {
    const { email, password } = Object.fromEntries(
      await request.formData(),
    ) as Record<string, string>;

    let user;

    try {
      user = await prisma.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      });
    } catch (error) {
      console.log('error', error);
      return fail(400, { message: 'User does not exist' });
    }

    const passwordMatch = await compare(password, user?.password as string);

    if (!passwordMatch) {
      return fail(400, { message: 'Invalid  password' });
    }

    const session = await lucia.createSession(user?.id as string, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies.set(sessionCookie.name, sessionCookie.value, {
      path: '/',
      ...sessionCookie.attributes,
    });

    throw redirect(302, '/dashboard');
  },
};
