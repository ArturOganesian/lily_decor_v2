
import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
    user_name: Yup.string()
      .required("Your Name is Required")
      .min(2, "Your name should contain minimum of 2 symbols")
      .max(25, "Your name should contain maximum 24 symbols"),
    user_email: Yup.string()
      .required("We need your email to contact you 😜")
      .email("Please fill up a correct email"),
    company_name: Yup.string()
      .min(2, "Company name should contain minimum of 2 symbols")
      .max(25, "Company name should contain maximum 24 symbols"),
    message: Yup.string()
      .required("Your message is required")
      .min(15, "Your message should contain minimum 15 symbols")
      .max(250, "Your message can't contain more than 50 symbols"),
    user_phone: Yup.string().required(
      "We need your phone number to cotact you faster"
    ),
  });


  export const subscriptionValidationSchema = Yup.object().shape({
    subscriber_email: Yup.string()
      .required("Please fill your email up")
      .email("Invalid email"),
  });