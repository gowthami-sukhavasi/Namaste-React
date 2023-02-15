import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    // alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      handleNavigate(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
