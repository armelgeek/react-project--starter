export const TYPES = {
  loading: null,
};

for (const key of Object.keys(TYPES)) {
  TYPES[key] = `empty__${key}`;
}
