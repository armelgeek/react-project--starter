import React, { memo } from "react";
import { useHistory, useParams } from "react-router";
import LayoutContent from "../../@adminlte/adminlte/Content/LayoutContent";
import Form from "../../@adminlte/adminlte/form";
import { useGetter,useDispatch } from "../../store";
import { validationSchema } from "./validation";

const EditRole = memo(() => {
  const { id } = useParams();
  const history = useHistory();
  const isLoading = useGetter("roles", "isLoading");
  const value = useGetter("roles", "value");
  const update = useDispatch("roles", "update");
  return (
    <LayoutContent>
      <Form
        id="edit-role"
        initialValues={{
          name: "proda.name",
          contact:"proda.contact",
        }}
        validations={validationSchema}
        onSubmit={(values, form) => {
          const { name, contact } = values;
         /** dispatch(
            action("vaccinateurs").update({
              id: proda.id,
              name: name,
              contact: contact,
            })
          ); */
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
                    <Form.Field.Input
                      name="name"
                      value={values?.name}
                      label="Nom"
                      placeholder={"Nom"}
                    />
                    <Form.Field.Input
                      name="contact"
                      value={values?.contact}
                      label="Téléphone"
                      placeholder={"Téléphone"}
                    />
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
