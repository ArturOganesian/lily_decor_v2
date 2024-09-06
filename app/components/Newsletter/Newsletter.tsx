"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { subscriptionValidationSchema as validationSchema } from "@/app/helpers/schemas/validationSchema";
import { Fade } from "react-awesome-reveal";
import { subscribe } from "@/app/actions/subscribe";
import { toast, ToastContainer } from "react-toastify";
import cake_pic from "@/public/images/Cook/cake_right.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const notify = (value: string) => toast(value);

  const handleSubmit = async (value: { subscriber_email: string }) => {
    const subscribeEmail = await subscribe({
      email: value.subscriber_email,
    });

    try {
      if (subscribeEmail?.error !== undefined) {
        throw new Error(subscribeEmail.error);
      } else {
        notify("Your have successfully subscribed");
      }
    } catch (error: any) {
      notify(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      subscriber_email: "",
    },
    onSubmit: handleSubmit as any,
    validationSchema,
  });
  return (
    <div className="relative">
      <div className="mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 rounded-lg">
        <div className="flex items-center">
          <ToastContainer />

          <div className="flex flex-col gap-5 pl-10">
            <div>
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h2 className="text-lightpink text-2xl font-normal mb-3 tracking-widest uppercase ls-51">
                  We always keep update our products
                </h2>
              </Fade>
            </div>

            <div>
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <p className="text-lightpink text-md font-normal mb-3  tracking-wider">
                  Subscribe to newsleeter, be the first who will use new product
                </p>
              </Fade>
            </div>

            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="relative w-[400px]">
                  <input
                    type="email"
                    placeholder="Subscribe to newsletters"
                    className="w-full h-[60px] outline-none rounded-xl p-4 text-sm font-light tracking-widest"
                    name="subscriber_email"
                    id="subscriber_email"
                    onChange={formik.handleChange}
                    value={formik.values.subscriber_email}
                  />
                  {formik.touched.subscriber_email &&
                    formik.errors.subscriber_email && (
                      <span>{formik.errors.subscriber_email}</span>
                    )}
                  <button
                    className="absolute top-[18px] right-8 w-6 h-6"
                    type="submit"
                  >
                    <EnvelopeIcon className="text-pink  font-sm" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-span-5 relative hidden md:block">
            <div>
              <Image
                src={cake_pic}
                alt="soup-image"
                width={526}
                height={502}
                className="mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
