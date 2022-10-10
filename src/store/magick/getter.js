export const mergeGetter = (modules,moduleName) =>  {
  const isLoading = state => state[moduleName].isLoading;
  const items = state => state[moduleName].items;
  return {...modules[moduleName].getter,...{ isLoading,items }}
}