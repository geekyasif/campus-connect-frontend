import Joi from "joi";

const registrationSchema = Joi.object({
  fullName: Joi.string().required("name is required"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required("email is required"),
  password: Joi.string().required("password is required"),
  confirm_password: Joi.ref("password"),
});

export default registrationSchema;
