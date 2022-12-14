export const excludeModules = ["permissions"]
export const getExcludeModules = (module) =>{
    return excludeModules.includes(module);
}