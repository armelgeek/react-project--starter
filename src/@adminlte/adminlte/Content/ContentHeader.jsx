import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function ContentHeader({ children, title }) {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <div>
        <div className="content-header p-2 shadow-sm bg-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5 className="text-uppercase">{title}</h5>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Accueil</Link>
                  </li>
                  {children}
                </ol>
              </div>
            </div>
          </div>
        </div>
        {location.pathname != "/" ? (
          <div className="mb-1">
            <button
              type="button"
              onClick={() => history.goBack()}
              className="btn btn-link"
            >
              {"<<"} Revenir en arriere
            </button>
          </div>
        ): null}
      </div>
    </>
  );
}

export default React.memo(ContentHeader);
