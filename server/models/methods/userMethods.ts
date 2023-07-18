import User from "../schemas/User";
import { IUser } from "../../types/types";

export const createUser = async (user:IUser) => {
  try {
    const newUser = await User.create(user)
    newUser.password = null
    return newUser
  } catch (error) {
    console.log(error)
  }
}

export const login = async (name:string, password:string) => {
  //compare here later
  try {
    const user = await User.findOne({name})
    user!.password = null
    return user
  } catch (error) {
    console.log(error)
  }
}