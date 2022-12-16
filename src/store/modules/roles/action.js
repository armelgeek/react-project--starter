export const TYPES = {};
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `roles__${key}`;
}
