export const excludeModules = ["permissions","common"]
export const getExcludeModules = (module) =>{
    return excludeModules.includes(module);
}