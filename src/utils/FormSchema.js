import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").required("required"),
  lastName: Yup.string().min(2, "Too Short!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one -> Uppercase letter, Lowercase letter, Special character,\n number"
    )
    .required("required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords are not matched!")
    .required("required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .required("required"),
});

export const updateFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").required("required"),
  lastName: Yup.string().min(2, "Too Short!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

// Create Listing

export const createListingForm = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("required"),
  price: Yup.number()
    .min(100, "Price should be atleast $100")
    .required("required"),
  area: Yup.number()
    .min(100, "Area should be atleast 100 sqft.")
    .required("required"),
  location: Yup.string().min(10, "Too Short!").required("Required"),
  description: Yup.string().min(100, "Too Short!").required("required"),
});
