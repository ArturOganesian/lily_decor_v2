"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { formValidationSchema as validationSchema } from "@/app/helpers/schemas/validationSchema";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import  Fade  from "react-awesome-reveal";
import { toast } from "react-toastify";
import cooking_process_img from "@/public/images/ContactUs/contactus.jpg";

const Contact = () => {
  const notify = (value: string) => toast(value);
  const form = useRef() as any;

  const handleSubmit = (e: any, { resetForm }: any) => {
    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID as string,
        process.env.TEMPLATE_ID as string,
        form.current as any,

        {
          publicKey: process.env.PUBLIC_KEY as string,
        }
      )
      .then(() => {
        notify("Success");
        resetForm();
      })
      .catch((error) => {
        notify(error?.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
      user_phone: "",
      company_name: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div className="py-10 sm:py-20 bg-darkpink">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              order now
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Contact us{" "}
            </h3>
          </Fade>
        </div>

        <div className="flex lg:flex-row flex-col justify-center lg:justify-between gap-4 items-center mt-5">
          
          
            <Image
              src={cooking_process_img}
              width={536}
              height={708}
              className="h-[708px] w-[536px] rounded-e-full hidden lg:block" 
              alt="Cooking process ilustration"
            />
            <Image
              src={cooking_process_img}
              width={400}
              height={300}
              className="h-[400px] w-[300px] rounded-t-full lg:hidden block" 
              alt="Cooking process ilustration"
            />
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 items-center"
            id="form"
          >
            <div className="contact_field">
              <label className="contact_input_title">
                Name <span className="text-[red]">*</span>
              </label>
              <input
                className="contact_input"
                type="text"
                name="user_name"
                id="user_name"
                value={formik.values.user_name}
                onChange={formik.handleChange}
                placeholder="Your Name"
              />

              {formik.touched.user_name && formik.errors.user_name && (
                <span className="error_message">{formik.errors.user_name}</span>
              )}
            </div>

            <div className="contact_field">
              <label className="contact_input_title">
                Email <span className="text-[red]">*</span>
              </label>
              <input
                className="contact_input"
                placeholder="Your Email"
                type="email"
                name="user_email"
                id="user_email"
                value={formik.values.user_email}
                onChange={formik.handleChange}
              />
              {formik.touched.user_email && formik.errors.user_email && (
                <span className="error_message">
                  {formik.errors.user_email}
                </span>
              )}
            </div>
            <div className="contact_field">
              <label className="contact_input_title">
                Your company name <span className="text-[red]">*</span>
              </label>
              <input
                className="contact_input"
                placeholder="Your company name"
                type="text"
                name="company_name"
                id="company_name"
                value={formik.values.company_name}
                onChange={formik.handleChange}
              />
              {formik.touched.company_name && formik.errors.company_name && (
                <span className="error_message">
                  {formik.errors.company_name}
                </span>
              )}
            </div>
            <div className="contact_field" id="b">
              <label className="contact_input_title">Phone Number</label>

              <PhoneInput
                placeholder="Your phone number"
                name="user_phone"
                value={formik.values.user_phone}
                onChange={(value) => formik.setFieldValue("user_phone", value)}
                className="w-[350px] h-[48px] bg-white text-base pl-2 rounded-xl hover:border hover:border-solid hover:border-pink"
                id="b"
              />
            </div>

            {formik.touched.user_phone && formik.errors.user_phone && (
              <span className="error_message">{formik.errors.user_phone}</span>
            )}

            <div className="contact_field">
              <label className="contact_input_title">
                Message <span className="text-[red]">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="outline-none hover:border hover:border-solid hover:border-pink  rounded-xl w-[350px] h-[150px] p-2"
                placeholder="Tell us about your wishes"
              />
              {formik.touched.message && formik.errors.message && (
                <span className="error_message">{formik.errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="text-xl w-[350px] font-medium rounded-xl text-white py-5 h-[70px] px-6 bg-pink lg:px-10 btn-animate"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
