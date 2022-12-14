export const roleActiveIndex = state => state.permissions.activeIndex;
export const roles = state => state.permissions.roles;
export const permissions = state => state.permissions.roles[state.permissions.activeIndex].permissions;