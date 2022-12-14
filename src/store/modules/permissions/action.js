export const TYPES = {
  setRoleActiveIndex: null,
  setPermissions: null
};
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `permissions__${key}`;
}
export const setRoleActiveIndex = index => ({
  type: TYPES.setRoleActiveIndex,
  payload: index,
});
export const setPermissions = permissions => ({
  type: TYPES.setPermissions,
  payload: permissions,
});