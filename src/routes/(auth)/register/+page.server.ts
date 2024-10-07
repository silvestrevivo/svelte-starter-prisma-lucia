import { fail, redirect } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { hash } from 'bcrypt';

export const actions = {
  default: async ({ request }) => {
    const { username, email, password } = Object.fromEntries(
      await request.formData(),
    ) as Record<string, string>;

    const hashedPassword = await hash(password, 10);

    try {
      await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
    } catch (error) {
      console.log(error);
      return fail(400, { message: 'Error creating user' });
    }

    throw redirect(302, '/login');
  },
};
