import * as yup from "yup";

//Register or login validation
const joinSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(7, "password must be greater than 6")
      .required("Password is required"),
  }),
});

export { joinSchema };
