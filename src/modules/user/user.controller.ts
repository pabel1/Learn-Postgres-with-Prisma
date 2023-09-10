import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userServices } from "./user.services";
const createUser = async (req: Request, res: Response) => {
  try {
    const userData: User = req.body;
    const user = await userServices.userInsertIntoDB(userData);

    res.status(201).json({
      succss: true,
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};

// user profile
const userProfile = async (req: Request, res: Response) => {
  try {
    const profileData = await userServices.userProfileCreateOrUpdateIntoDB(
      req.body
    );
    res.status(200).json({
      success: true,
      profileData,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};

// get all user with filtering
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.allUsersFromDB();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.toString(),
    });
  }
};

export const userController = {
  createUser,
  userProfile,
  getUsers,
};
