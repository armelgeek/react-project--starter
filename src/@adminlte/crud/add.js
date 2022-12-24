import React, { memo,useCallback } from "react";
import { useHistory } from "react-router";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import Form from "../../@adminlte/adminlte/form";
import { validationSchema } from "./validation";
import { useDispatch } from "../../store";
import Field from './field';

const Add = memo(({ title="",model,initialState, schemas }) => {
  const create = useDispatch(`${model}`, "create");
  const history = useHistory();
  const onSubmit = useCallback(
    async (values, form) => {
      await create(values);
      goBack();
    },
    [],
  );
  const goBack = useCallback(
    () => {
      history.goBack();
    },
    [history],
  );
  
  return (
    <LayoutContent title={title}>
      <Form
        id={`add-${model}`}
        enableReinitialize
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
                  {}
                  <div className="card-body">
                    <Field schemas={schemas}/>
                    <div className="mt-3">
                      <button className="btn btn-green  btn-sm " type="submit">
                        Ajouter
                      </button>
                      <button
                        onClick={}
                        className="btn btn-danger ml-2  btn-sm "
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

export default Add;
