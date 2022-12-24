import React, { memo } from "react";
import { useHistory } from "react-router";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import Form from "../../@adminlte/adminlte/form";
import { validationSchema } from "./validation";
import { useDispatch } from "../../store";

const AddRole = memo(({ model, title,schema, validation }) => {
  const create = useDispatch(`${model}`, "create");
  const history = useHistory();
  return (
    <LayoutContent title={title}>
      <Form
        enableReinitialize
        initialValues={{
          name: "",
          description: "",
        }}
        validations={validationSchema}
        onSubmit={(values, form) => {
          const { name, description } = values;
          create(values);
          history.goBack();
        }}
        render={({ values }) => (
          <Form.Element>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    Information générale
                  </div>
                  <div className="card-body">
                  {}
                    <Form.Field.Input
                      name="name"
                      label="Nom"
                      placeholder={"Nom"}
                    />
                    <Form.Field.Textarea
                      name="description"
                      label="Description"
                      placeholder={"Description"}
                    />
                    <div className="mt-3">
                      <button className="btn btn-green  btn-sm " type="submit">
                        Ajouter
                      </button>
                      <button
                        onClick={() => history.goBack()}
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

export default AddRole;
