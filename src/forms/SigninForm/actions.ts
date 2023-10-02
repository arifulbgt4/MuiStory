"use server";

import { FormDataOptions } from "./Types";

export async function signIn({ password, email }: FormDataOptions) {
  try {
    console.log("first", password, email);
  } catch (error) {
    console.error(error);
  }
}
