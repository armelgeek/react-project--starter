const partKeyPrefix = "@___PART___";
const partKeyPrefixRxp = /^@___PART___/;
const keySplit = ",";
const limit = 500000;
const buildData = (key, value, datas) => {
  let valueStr = JSON.stringify(value);
  if (valueStr.length <= limit) return datas.push([key, valueStr]);

  const partKeys = [];
  for (let i = 0, len = Math.floor(valueStr.length / limit); i <= len; i++) {
    let partKey = `${partKeyPrefix}${key}${i}`;
    partKeys.push(partKey);
    datas.push([partKey, valueStr.substring(i * limit, (i + 1) * limit)]);
  }
  datas.push([key, `${partKeyPrefix}${partKeys.join(keySplit)}`]);
  return datas;
};
const handleGetData = (partKeys) => {
  partKeys = partKeys.replace(partKeyPrefixRxp, "").split(keySplit);
  let getDatas = [];
  partKeys.forEach((part) => {
    getDatas.push(localStorage.getItem(part));
  });
  return JSON.parse(getDatas.map((data) => data[1]).join(""));
};

export const setData = async (key, value) => {
  const datas = [];
  buildData(key, value, datas);

  try {
    datas.forEach((data) => {
      localStorage.setItem(data);
    });
  } catch (e) {
    // saving error
    console.log(e.message);
    throw e;
  }
};

export const getData = async (key) => {
  let value;
  try {
    value = await localStorage.getItem(key);
  } catch (e) {
    // error reading value
    console.log(e.message);
    throw e;
  }
  if (partKeyPrefixRxp.test(value)) {
    return handleGetData(value);
  } else if (value) value = JSON.parse(value);
  return value;
};

export const removeData = async (key) => {
  let value;
  try {
    value = await localStorage.getItem(key);
  } catch (e) {
    // error reading value
    console.log(e.message);
    throw e;
  }
  if (partKeyPrefixRxp.test(value)) {
    let partKeys = value.replace(partKeyPrefixRxp, "").split(keySplit);
    partKeys.push(key);
    try {
      partKeys.forEach((data) => {
        localStorage.removeItem(data);
      });
    } catch (e) {
      // remove error
      console.log(e.message);
      throw e;
    }
  } else {
    try {
      await localStorage.removeItem(key);
    } catch (e) {
      // remove error
      console.log(e.message);
      throw e;
    }
  }
};

export const getAllKeys = async () => {
  let keys;
  try {
    keys = Object.keys(localStorage);
  } catch (e) {
    // read key error
    console.log(e.message);
    throw e;
  }

  return keys;
};

export const getDataMultiple = async (keys) => {
  let datas = [];
  try {
    keys.forEach((key) => {
      datas.push(localStorage.getItem(key));
    });
  } catch (e) {
    // read error
    console.log(e.message);
    throw e;
  }
  const promises = [];
  for (const data of datas) {
    if (partKeyPrefixRxp.test(data[1])) {
      promises.push(handleGetData(data[1]));
    } else {
      promises.push(Promise.resolve(data[1] ? JSON.parse(data[1]) : data[1]));
    }
  }
  return Promise.all(promises).then((values) => {
    return datas.map(([key], index) => ({ key, value: values[index] }));
  });
};

export const setDataMultiple = async (datas) => {
  const allData = [];
  for (const { key, value } of datas) {
    buildData(key, value, allData);
  }
  try {
    allData.forEach((data) => {
      localStorage.setItem(data);
    });
  } catch (e) {
    // save error
    console.log(e.message);
    throw e;
  }
};

export const removeDataMultiple = async (keys) => {
  if (!keys.length) return;
  const datas = [];
  keys.forEach((key) => {
    datas.push(localStorage.getItem(key));
  });
  let allKeys = [];
  for (const [key, value] of datas) {
    allKeys.push(key);
    if (partKeyPrefixRxp.test(value)) {
      allKeys.push(...value.replace(partKeyPrefixRxp, "").split(keySplit));
    }
  }
  try {
    allKeys.forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (e) {
    // remove error
    console.log(e.message);
    throw e;
  }
};

export const clearAll = async () => {
  try {
    await localStorage.clear();
  } catch (e) {
    // clear error
    console.log(e.message);
    throw e;
  }
};