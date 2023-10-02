import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

import { prisma } from "src/lib/prisma";
import { FormDataOptions } from "src/forms/SignupForm/Types";

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as FormDataOptions;

    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
