import { fail } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { hash } from 'bcrypt';
import { registerUserSchema } from '$schemas/index';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export async function load() {
  return {
    form: await superValidate(zod(registerUserSchema)),
  };
}

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(registerUserSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const { username, email, password } = form.data;

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
      return fail(400, {
        form: {
          ...form,
          errors: { message: 'There was an error in your request' },
        },
      });
    }

    return { form };
  },
};
