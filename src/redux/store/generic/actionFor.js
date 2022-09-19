import typeFor from "./typeFor";
function actionFor(resourceName) {
  if (resourceName == null) throw new Error("actionFor: Expected resourceName");
  const actionTypes = typeFor(resourceName);
  return {
    getStart(data) {
      return {
        data: data,
        type: actionTypes.getStart,
      };
    },
    getSuccess(records, data) {
      return {
        data: data,
        records: records,
        type: actionTypes.getSuccess,
      };
    },
    getError(error, data) {
      return {
        data: data,
        error: error,
        type: actionTypes.getError,
      };
    },

    fetchStart(data) {
      return {
        data: data,
        type: actionTypes.fetchStart,
      };
    },
    fetchSuccess(records, data) {
      return {
        data: data,
        records: records,
        type: actionTypes.fetchSuccess,
      };
    },

    fetchError(error, data) {
      return {
        data: data,
        error: error,
        type: actionTypes.fetchError,
      };
    },

    createStart(data) {
      return {
        data: data,
        type: actionTypes.createStart,
      };
    },
    createSuccess(data) {
      return {
        data: data,
        type: actionTypes.createSuccess,
      };
    },
    createError(error, record) {
      return {
        error: error,
        record: record,
        type: actionTypes.createError,
      };
    },

    updateStart(record, data) {
      return {
        data: data,
        record: record,
        type: actionTypes.updateStart,
      };
    },

    updateSuccess(record, data) {
      return {
        data: data,
        record: record,
        type: actionTypes.updateSuccess,
      };
    },

    updateError(error, record, data) {
      return {
        data: data,
        error: error,
        record: record,
        type: actionTypes.updateError,
      };
    },

    deleteStart(record, data) {
      return {
        data: data,
        record: record,
        type: actionTypes.deleteStart,
      };
    },

    deleteSuccess(record, data) {
      return {
        data: data,
        record: record,
        type: actionTypes.deleteSuccess,
      };
    },
    deleteError(error, record, data) {
      return {
        data: data,
        error: error,
        record: record,
        type: actionTypes.deleteError,
      };
    },
  };
}
export default actionFor;
