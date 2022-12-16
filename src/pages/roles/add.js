import React, { memo } from "react";
import { useHistory } from "react-router";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import Form from "../../@adminlte/adminlte/form";
import { validationSchema } from "./validation";

const AddRole = memo(() => {
  const history = useHistory();
  return (
    <LayoutContent title={"ajouter un role"}>
      <Form
        id="add-role"
        enableReinitialize
        initialValues={{
          name: "",
        }}
        validations={validationSchema}
        onSubmit={(values, form) => {
          const { name } = values;
          /**dispatch(
        action("vaccinateurs").create({
          name: name,
          contact: contact,
        })
      )**/ history.goBack();
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
                    <Form.Field.Input
                      name="name"
                      label="Nom"
                      placeholder={"Nom"}
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
