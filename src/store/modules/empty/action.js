export const TYPES = {
  hello: null,
};
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `empty__${key}`;
}
