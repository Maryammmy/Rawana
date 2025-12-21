import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().trim().email("invalid_email").required("email_required"),
  password: Yup.string().trim().required("password_required"),
});
