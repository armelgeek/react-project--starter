export const mergeActions = (modules,moduleName) =>{
  const setLoading = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__loading`, payload: payload});
  };
   const addItem = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__add__item`, payload: payload});
  };
  const insertItem = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__insert__item`, payload: payload});
  };
  const addItems = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__add__items`, payload: payload});
  };
  const removeItemByIndex = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__remove__item__by__index`, payload: payload});
  };
   const removeItemByKey = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__remove__item__by__key`, payload: payload});
  };

  const removeItemsByKey = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__remove__items__by__key`, payload: payload});
  };
   const updateItem = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__update_item`, payload: payload});
  };
  const updateItemByKey = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__update_item_by_key`, payload: payload});
  };
  
  const updateItemsByKey = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__update_items_by_key`, payload: payload});
  };
  const updateValueAllItems = (payload) => async (dispatch, getState) => {
    dispatch({type: `${moduleName}__update_value_all_items`, payload: payload});
  };
  return {
	  	...modules[moduleName].action,...{
	  	setLoading,
	  	addItem,
	  	insertItem,
	  	removeItemByIndex,
	  	addItems,
	  	removeItemByKey,
	  	removeItemsByKey,
	  	updateItem,
	  	updateItemByKey,
	  	updateItemsByKey,
	  	updateValueAllItems
	  }
	}
}
