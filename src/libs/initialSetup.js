import Role from '../models/Role';

export const createRole = async () => {
  try {
    const count = Role.estimatedDocumentCount();

    if (count < 0) return;

    const roles = await Promise.all([
      new Role({ role: 'user' }).save(),
      new Role({ role: 'admin' }).save(),
      new Role({ role: 'Moderator' }).save(),
    ]);
    console.log(roles);
  } catch (error) {
    console.error(error);
  }
};
