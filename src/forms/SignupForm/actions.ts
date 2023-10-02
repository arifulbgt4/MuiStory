"use server";

import { FormDataOptions } from "./Types";

export async function signUp({ password, email, fullname }: FormDataOptions) {
  try {
    console.log("first", password, email);
  } catch (error) {
    console.error(error);
  }
}
