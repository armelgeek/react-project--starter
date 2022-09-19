import { action } from "../modules/empty";
import actionFor from "./actionFor";

export const get = (resourceName, action) => async (dispatch) => {
  const actionFor = actionFor(resourceName);

  dispatch(actionFor.getStart());
  return await action()
    .then((response) => {
      dispatch(actionFor.getSuccess(response));
    })
    .catch((err) => {
      dispatch(actionFor.getError(err));
    });
};

export const fetch = (resourceName, action) => async (dispatch) => {
  const actionFor = actionFor(resourceName);
  dispatch(actionFor.fetchStart());
  return await action()
    .then((response) => {
      let data = response.data;
      dispatch(actionFor.fetchSuccess(data));
    })
    .catch((err) => {
      dispatch(actionFor.fetchError(err));
    });
};

// Create action

export const create = (resourceName, record, action) => async (dispatch) => {
  const actionFor = actionFor(resourceName);
  dispatch(actionFor.createStart(record));
  return await action()
    .then((json) => {
      dispatch(
        actionFor.createSuccess(record, json.id, {
          receivedAt: new Date(),
        })
      );
    })
    .catch(function (error) {
      dispatch(actionFor.createError(error, record));
    });
};

// Update action

export const update = (resourceName, body, action) => async (dispatch) => {
  const actionFor = actionFor(resourceName);
  dispatch(actionFor.updateStart(body));
  return await action()
    .then((json) => {
      dispatch(
        actionFor.updateSuccess(body, body.id, {
          receivedAt: new Date(),
        })
      );
    })
    .catch((error) => {
      dispatch(actionFor.updateError(error, body));
    });
};

// Destroy action
export const destroy = (resourceName, body, action) => async (dispatch) => {
  const actionFor = actionFor(resourceName);
  dispatch(actionFor.deleteStart(body));
  return await action()
    .then(() => {
      dispatch(actionFor.deleteSuccess(body, { receivedAt: new Date() }));
    })
    .catch((error) => {
      dispatch(actionFor.deleteError(error, body));
    });
};
export { get, fetch, create, update, destroy };
