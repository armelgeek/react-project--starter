export const mergeGetter = (modules, moduleName) => {
  const isLoading = (state) => state[moduleName].meta.isLoading;
  const meta = (state) => state[moduleName].meta;
  const error = (state) => state[moduleName].meta.error;
  const success = (state) => state[moduleName].meta.success;
  const value = (state) => state[moduleName].items;
  const selected = (state) => state[moduleName].selected;
  return {
    ...modules[moduleName].getter,
    ...{ isLoading, meta, value, selected, error, success },
  };
};
