import { User } from "@prisma/client";
import prisma from "../../shareable/prismaInstants";

const userInsertIntoDB = async (data: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data: data,
  });
  return newUser;
};

export const userServices = {
  userInsertIntoDB,
};
