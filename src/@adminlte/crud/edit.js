import React, { memo } from "react";
import { useHistory, useParams } from "react-router";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import Form from "../../@adminlte/adminlte/form";
import { useGetter, useDispatch } from "../../store";
import { validationSchema } from "./validation";
import Field from "./field";

const EditRole = memo(({ title = "", model, initialState, schemas }) => {
  const { id } = useParams();
  const history = useHistory();
  const isLoading = useGetter(`${model}`, "isLoading");
  const update = useDispatch(`${model}`, "update");
  const onSubmit = useCallback(async (values, form) => {
    await update({ ...values, id: id });
    goBack();
  }, []);
  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <LayoutContent title={title}>
      <Form
        id={`edit-${model}`}
        initialValues={initialState}
        validations={validationSchema}
        onSubmit={onSubmit}
        render={({ values }) => (
          <Form.Element>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    Information générale
                  </div>
                  <div className="card-body">
                    <Field schemas={schemas} />
                    <div className="mt-3">
                      <button className="btn btn-green  btn-sm " type="submit">
                        Editer
                      </button>
                      <button
                        className="btn btn-danger ml-2 btn-sm "
                        type="reset"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form.Element>
        )}
      />
    </LayoutContent>
  );
});

export default EditRole;
