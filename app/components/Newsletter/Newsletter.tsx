"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { getMails, useAppDisptach } from "@/app/globalRedux/store";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { getSubscribersThunk } from "@/app/globalRedux/slices/mailsSlice";
import { subscriptionValidationSchema as validationSchema } from "@/app/helpers/schemas/validationSchema";
import { Fade } from "react-awesome-reveal";
import { subscribe } from "@/app/actions/subscribe";
import { toast, ToastContainer } from "react-toastify";
import cake_pic from "@/public/images/Cook/cake_right.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const dispatch = useAppDisptach();
  const mails = useSelector(getMails); //to do for admin panel

  

  useEffect(() => {
        dispatch(getSubscribersThunk())
  },[])
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
    <>
    <ToastContainer />
     <div className="relative px-4">
      <div className="mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 md:p-0 p-5 rounded-lg">
        <div className="flex items-center m-0 p-0 justify-between md:justify-start">

          <div className="flex flex-col md:gap-5 gap-2  flex-wrap md:pl-10">
            <div>
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h2 className="text-lightpink xl:text-2xl xs:text-xs  md:text-xl ls:-0  font-normal mb-3 tracking-widest uppercase xl:ls-51">
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
                <p className="text-lightpink md:text-base xs:text-[10px] font-normal mb-3  tracking-wider">
                  Subscribe to newsleeter, be the first who will use new product
                </p>
              </Fade>
            </div>

            <div>
              <form onSubmit={formik.handleSubmit} className="">
                <div className="relative md:w-[400px] sm:[w-300px]">
                  <input
                    type="email"
                    placeholder="Subscribe to newsletters"
                    className="w-full md:h-[60px] sm:h-[30px] outline-none rounded-xl md:p-4 xs:p-2 md:text-sm xs:text-[8px] sm:text-xs font-light tracking-widest"
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
                    className="absolute md:top-[18px] top-[9px] md:mb-0 right-8 md:w-6 md:h-6 w-3 h-3"
                    type="submit"
                  >
                    <EnvelopeIcon className="text-pink font-sm" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="">
            <div>
              <Image
                src={cake_pic}
                alt="soup-image"
                width={526}
                height={502}
                className="mb-5 md:w-[526px] md:h-[502px] sm:w-[150px] sm:h-[150px]  xs:w-[80px] h-[80px]"

              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Newsletter;
