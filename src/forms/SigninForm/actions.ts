import { signIn as nextSignIn } from "next-auth/react";

import { FormDataOptions } from "./Types";

export async function signIn({
  password,
  email,
  callbackUrl,
}: FormDataOptions) {
  try {
    const res = await nextSignIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl,
    });
    return res;
  } catch (error) {
    return error;
  }
}
