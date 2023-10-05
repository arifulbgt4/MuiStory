"use server";
import { cache } from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "src/lib/auth";
import { prisma } from "src/lib/prisma";
import { User } from "src/global/types";

export const getUser = cache(async () => {
  const session = (await getServerSession(authOptions)) as unknown as any;

  if (session) {
    const user = await prisma.user.findFirst({
      where: { id: session.user.id },
    });

    if (user) {
      return user;
    }
  }
});

export const updateUser = async ({
  id,
  ...payload
}: Omit<User, "createdAt" | "updatedAt">) => {
  const res = await prisma.user.update({
    where: { id },
    data: { ...payload },
  });

  return res;
};
