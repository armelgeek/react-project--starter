import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function ContentHeader({ children, title }) {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <div>
        <div class="content-header p-2 shadow-sm bg-white">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <h5 class="text-uppercase">{title}</h5>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
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
