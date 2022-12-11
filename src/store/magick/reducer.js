const defaultState = {
  meta: {
    isLoading: false,
    error: "",
    success: "",
    totalPages: 0,
    totalItems: 0,
    currentPage: 0,
  },
  items: [],
  selected: {},
};
export const deduplicationList = (list) => {
  const ids = new Set();
  return list.filter((s) => {
    if (ids.has(s.id)) return false;
    ids.add(s.id);
    return true;
  });
};

export const addItem = ({ state, payload }) => [...state, payload];
export const addItems = ({ state, payload }) => [...state, ...payload];
export const insertItem = (data, { index, item }) => [
  ...data.slice(0, index),
  item,
  ...data.slice(index),
];

export const insertItemAfterIndex = (data, { index, item }) => [
  ...data.slice(0, index),
  item,
  ...data.slice(index),
];

const removeItem = (data, index) => [
  ...data.slice(0, index),
  ...data.slice(index + 1),
];
const removeItemsByKey = (data, { items, key }) => {
  const keys = items.map((item) => item[key]);
  return data.filter((item) => !keys.includes(item[key]));
};

const updateItem = (data, { index, item }) =>
  data.map((curItem, curIndex) => {
    if (curIndex !== index) return curItem;
    return { ...curItem, ...item };
  });

const updateItemByKey = (data, { item, key }) =>
  data.map((curItem) => {
    if (curItem[key] !== item[key]) return curItem;
    return { ...curItem, ...item };
  });
const updateItemsByKey = (data, { items, key }) =>
  data.map((curItem) => {
    const item = items.find((it) => curItem[key] === it[key]);
    if (!item) return curItem;

    return { ...curItem, ...item };
  });
const updateValueAllItems = (data, payload) =>
  data.map((curItem) => ({ ...curItem, ...payload }));
export const mergeReducers = (moduleName, initialState, mutations) => {
  const defaultReducers = {
    [`${moduleName}__loading`](state, isLoading) {
      state = { ...state };
      state.meta.isLoading = isLoading;
      return state;
    },
    [`${moduleName}__item__info`](state, { prop, value }) {
      return {
        ...state,
        [prop]: value,
      };
    },
    [`${moduleName}__add__item`](state, payload) {
      return {
        ...state,
        items: [payload, ...state.items],
      };
    },
    [`${moduleName}__insert__item`](state, { index, item }) {
      return {
        ...state,
        items: insertItem(state.items, { index, item }),
      };
    },
    [`${moduleName}__add__items`](state, payload) {
      return {
        ...state,
        items: [...payload, ...state.items],
      };
    },
    [`${moduleName}__remove__item__by__index`](state, { index }) {
      return {
        ...state,
        items: removeItem(state.items, index),
      };
    },
    [`${moduleName}__remove__item__by__key`](state, { item, key }) {
      const index = state.items.findIndex(
        (curItem) => curItem[key] === item[key]
      );
      return index > -1
        ? {
            ...state,
            items: removeItem(state.items, index),
          }
        : state;
    },
    [`${moduleName}__remove__items__by__key`](state, { items, key }) {
      return {
        ...state,
        items: removeItemsByKey(state.items, { items, key }),
      };
    },
    [`${moduleName}__update_item`](state, { index, item }) {
      return {
        ...state,
        items: updateItem(state.items, { index, item }),
      };
    },
    [`${moduleName}__update_item_by_key`](state, { key, item }) {
      return {
        ...state,
        items: updateItemByKey(state.items, { key, item }),
      };
    },
    [`${moduleName}__update_items_by_key`](state, { key, items }) {
      return {
        ...state,
        items: updateItemsByKey(state.items, { key, items }),
      };
    },
    [`${moduleName}__update_value_all_items`](state, payload) {
      return {
        ...state,
        items: updateValueAllItems(state.items, payload),
      };
    },
    [`${moduleName}__fetch_items`](state, payload) {
      return {
        ...state,
        items: deduplicationList([...payload]),
      };
    },
    [`${moduleName}__selected_item`](state, payload) {
      return {
        ...state,
        selected: payload,
      };
    },
    [`${moduleName}__error`](state, payload) {
      state = { ...state };
      state.meta.error = payload;
      return state;
    },
    [`${moduleName}__success`](state, payload) {
      state = { ...state };
      state.meta.success = payload;
      return state;
    },
  };
  mutations = { ...mutations, ...defaultReducers };
  const reducer = (state = { ...initialState, ...defaultState }, action) =>
    mutations[action.type]
      ? mutations[action.type](state, action.payload)
      : state;
  return reducer;
};
