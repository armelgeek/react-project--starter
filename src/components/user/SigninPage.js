import React, { useState, memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useDispatch } from "../../store";

const SigninPage = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    username: '',
    password: ''
  });
  const history = useHistory();
  const signin = useDispatch("users", "signinUser");
  const [loading, setLoading] = useState(false);
  const onSubmit = useCallback(({ username, password }) => {
    setLoading(true);
    signin({
      username: username,
      password: password,
    });
    history.push("/");
    setLoading(false);
  }, []);
  /**return (
    <>
      {loading && <p>Connexion en cours ....</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Nom d'utilisateur"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}
        <input
          placeholder="Mot de passe"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <input type="submit" value="Connexion" />
      </form>
    </>
  )**/ return (
    <div className="login-box">
      <div className="login-logo">
        <h5><span className="text-green">OFFICINE</span> AMBALAVAO</h5>
      </div>
      {loading && <p>Connexion en cours ....</p>}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Connectez-vous pour acceder au logiciel</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nom d'utilisateur"
                {...register("username", { required: true })}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Mot de passe"
                {...register("password", { required: true })}
              />
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <button type="submit" className="btn bg-thead text-white btn-block">
                  Connexion
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default SigninPage;
