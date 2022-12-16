export const excludeModules = ["permissions","common","users"]
export const getExcludeModules = (module) =>{
    return excludeModules.includes(module);
}