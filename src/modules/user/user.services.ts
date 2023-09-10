import { Profile, User } from "@prisma/client";
import prisma from "../../shareable/prismaInstants";
import { startOfDayEndOfDay } from "../../utilitys/getDateMonthTime";

const userInsertIntoDB = async (data: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data: data,
  });
  return newUser;
};

// user profile create and update
const userProfileCreateOrUpdateIntoDB = async (
  data: Profile
): Promise<Profile> => {
  try {
    const isExist = await prisma.profile.findUnique({
      where: {
        userId: data.userId,
      },
    });
    let newProfile: Profile | null = null;
    if (isExist) {
      newProfile = await prisma.profile.update({
        where: {
          userId: data.userId,
        },
        data: {
          bio: data.bio,
        },
      });
    } else if (!isExist) {
      newProfile = await prisma.profile.create({
        data: data,
      });
    }

    if (newProfile === null) {
      throw new Error("Profile creation or update failed");
    }

    return newProfile;
  } catch (error: any) {
    return error.toString();
  }
};

// get ussers wih filtering
const allUsersFromDB = async () => {
  const { startOfDay, endOfDay } = startOfDayEndOfDay();
  try {
    const users = await prisma.user.findMany({
      where: {
        // createdAt: {
        //   gte: startOfDay,
        //   lte: endOfDay,
        // },
        // name: {
        //   startsWith: "P",
        //   endsWith: "l",
        // },
        // name: {
        //   contains: "be",
        // },
        // email: {
        //   contains: "39",
        // },
        // id: {
        //   not: 4,
        // },
        // id: {
        //   equals: 4,
        // },
        // id: {
        //   in: [1, 4],
        // },
        // id: {
        //   notIn: [1, 4],
        // },
        // name: {
        //   equals: "pabel",
        //   mode: "insensitive",
        // },
        // OR: [
        //   {
        //     id: {
        //       gte: 42,
        //     },
        //   },
        //   {
        //     name: {
        //       equals: "Pabel",
        //     },
        //   },
        // ],
        // AND: {
        //   email: {
        //     startsWith: "pabel",
        //   },
        // },
      },
      select: {
        name: true,
        id: true,
      },
    });

    return users;
  } catch (error: any) {
    return error.toString();
  }
};

export const userServices = {
  userInsertIntoDB,
  userProfileCreateOrUpdateIntoDB,
  allUsersFromDB,
};
