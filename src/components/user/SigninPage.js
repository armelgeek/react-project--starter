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
    <div class="login-box">
      <div class="login-logo">
        <h4><span className="text-green">OFFICINE</span> AMBALAVAO</h4>
      </div>
      {loading && <p>Connexion en cours ....</p>}
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Connectez-vous pour acceder au logiciel</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Nom d'utilisateur"
                {...register("username", { required: true })}
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Mot de passe"
                {...register("password", { required: true })}
              />
            </div>
            <div class="row">
              <div class="col-6"></div>
              <div class="col-6">
                <button type="submit" class="btn bg-thead text-white btn-block">
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
