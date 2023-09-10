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
