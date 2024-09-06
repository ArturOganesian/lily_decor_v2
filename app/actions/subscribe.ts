"use server";

import { connectDB } from "../lib/mongodb";
import Email from "../models/Email";

export const subscribe = async (values: any) => {
  const { email } = values;

  try {
    await connectDB();
    const emailFound = await Email.findOne({ email });
    if (emailFound) {
      return {
        error: "This email is already exist in db",
      };
    }
    const subscribe = new Email({
      email,
    });
    const savedEmail = await  subscribe.save()
  } catch (error) {
    console.log(error,'Error in action!!!');
    
  }
};
