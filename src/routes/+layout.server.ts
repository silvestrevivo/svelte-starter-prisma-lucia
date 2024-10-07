export const load = async ({ locals }) => {
  if (locals.session && locals.user) {
    return {
      session: locals.session,
      user: locals.user,
    };
  }
};
