import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { loginUsingEmail, error, setError, setIsLoading } = useAuth();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/(?=.*?[A-Z])/, "Password must Contain a UpperCase"),
    email: Yup.string().required("Email is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    const { email, password } = data;
    handleEmailSignIn(email, password);
    reset();
  };
  //redirect
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const handleEmailSignIn = (email, password) => {
    loginUsingEmail(email, password)
      .then((result) => {
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  return (
    <Container className="mx-auto my-5 py-5 d-flex justify-content-center align-item-center">
      <div className="h-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-1 border-white p-4 shadow"
        >
          <h4>Please Sign In</h4>
          <input type="hidden" defaultValue="pending" {...register("status")} />
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <span className="invalid-feedback">{errors.email?.message}</span>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <span className="invalid-feedback">{errors.password?.message}</span>
          </div>
          <span className="text-danger">{error}</span>
          <p>
            New User? <Link to="/register">Create an Account</Link>
          </p>
          <input
            type="submit"
            value="signIn"
            className="mainColor text-white btn"
          />
        </form>
      </div>
    </Container>
  );
};

export default Login;
