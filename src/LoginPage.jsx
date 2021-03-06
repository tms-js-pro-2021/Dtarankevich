import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import { TextField, Button, Box } from "@material-ui/core";


const MyButton = (props) => {
  return <button {...props} />;
}

export default function LoginPage({ sting, ...otherProps}) {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: object({
      login: string().email("имейл не имейл"),
      password: string().required(),
    }),
  });

  return (
    <Box
      m={2}
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div style={{ width: 200, display: "flex", flexDirection: "column" }}>
          <TextField
            required
            label="Login"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.login && !!formik.errors.login}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ m: 1 }}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained" type="submit" sx={{ m: 1 }}>
            login
          </Button>
          <MyButton login={formik.values.login} />
        </div>
      </form>
    </Box>
  );
}