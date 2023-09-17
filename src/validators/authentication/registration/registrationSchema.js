import Joi from "joi";

const registrationSchema = Joi.object({
  fullname: Joi.string().required("name is required"),
  email: Joi.string().email({ tlds: { allow: false }}).required("email is required"),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required("password is required"),
  confirm_password: Joi.ref("password"),
});

export default registrationSchema;
