import React, { useState, memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useDispatch } from "../../store";

const SignupPage = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const signin = useDispatch("users", "signupUser");
  const [loading, setLoading] = useState(false);
  const onSubmit = useCallback(
    ({ username, password }) => {
      setLoading(true);
      signin({
        username,
        password
      });
      history.push('/');
      setLoading(false);
    },
    []
  );
  return (
    <>
      {loading && <p>Connexion en cours ....</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}
        <input
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" value="Connexion" />
      </form>
    </>
  );
});

export default SignupPage;
