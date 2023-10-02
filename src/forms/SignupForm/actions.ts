import { FormDataOptions } from "./Types";

export async function signUp({ password, email, name }: FormDataOptions) {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
