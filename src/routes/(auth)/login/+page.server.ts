import { fail } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import { compare } from 'bcrypt';
import { loginUserSchema } from '$schemas/index';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load() {
  return {
    form: await superValidate(zod(loginUserSchema)),
  };
}

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, zod(loginUserSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const { email, password } = form.data;

    let user;

    try {
      user = await prisma.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      });
    } catch (error) {
      console.log('error', error);
      return fail(400, {
        form: {
          ...form,
          errors: { message: 'There was an error in your request' },
        },
      });
    }

    if (!user) {
      return fail(400, {
        form: {
          ...form,
          errors: { message: 'User does not exist or password is invalid' },
        },
      });
    }

    const passwordMatch = await compare(password, user?.password as string);

    if (!passwordMatch) {
      return fail(400, {
        form: {
          ...form,
          errors: { message: 'User does not exist or password is invalid' },
        },
      });
    }

    const session = await lucia.createSession(user?.id as string, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies.set(sessionCookie.name, sessionCookie.value, {
      path: '/',
      ...sessionCookie.attributes,
    });

    return { form };
  },
};
