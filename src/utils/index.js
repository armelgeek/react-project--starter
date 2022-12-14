export const isObject = item => item && typeof item === 'object' && !Array.isArray(item)
export const compareVer = (currentVer, targetVer) => {
  // treat non-numerical characters as lower version
  // replacing them with a negative number based on charcode of each character
  const fix = (s) => `.${s.toLowerCase().charCodeAt(0) - 2147483647}.`;

  currentVer = ("" + currentVer).replace(/[^0-9.]/g, fix).split(".");
  targetVer = ("" + targetVer).replace(/[^0-9.]/g, fix).split(".");
  const c = Math.max(currentVer.length, targetVer.length);
  for (let i = 0; i < c; i++) {
    // convert to integer the most efficient way
    currentVer[i] = ~~currentVer[i];
    targetVer[i] = ~~targetVer[i];
    if (currentVer[i] > targetVer[i]) return 1;
    else if (currentVer[i] < targetVer[i]) return -1;
  }
  return 0;
};

export const objectDeepMerge = (target, source, mergedObj) => {
  if (!mergedObj) {
    mergedObj = new Set();
    mergedObj.add(target);
  }
  const base = {};
  Object.keys(source).forEach((item) => {
    if (isObject(source[item])) {
      if (mergedObj.has(source[item])) return;
      if (!isObject(target[item])) target[item] = {};
      mergedObj.add(source[item]);
      objectDeepMerge(target[item], source[item], mergedObj);
      return;
    }
    base[item] = source[item];
  });
  Object.assign(target, base);
};
