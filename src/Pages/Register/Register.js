import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { registerUsingEmail, error, setIsLoading, setUserName, setError } =
    useAuth();
  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/(?=.*?[A-Z])/, "Password must Contain a UpperCase"),
    email: Yup.string().required("Email is required"),
    name: Yup.string().required("UserName is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    const { name, password, email } = data;
    console.log(data);
    handleEmailSignUp(email, password, name);
    reset();
  };
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const handleEmailSignUp = (email, password, name) => {
    registerUsingEmail(email, password, name)
      .then((res) => {
        history.push(redirect_uri);
        setError("");
        setUserName(name);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  return (
    <Container className="mx-auto w-25 my-5 pt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-1 border-white p-4 shadow"
      >
        <h4>Create An Account</h4>

        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          <span className="invalid-feedback">{errors.name?.message}</span>
        </div>
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
        <span>{error}</span>
        <input type="submit" value="register" />
        <p>
          Already Registered? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;
