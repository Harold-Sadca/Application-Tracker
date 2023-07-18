import User from "../schemas/User";
import { IUser } from "../../types/types";

export const createUser = async (user:IUser) => {
  try {
    const newUser = User.create(user)
    return newUser
  } catch (error) {
    console.log(error)
  }
}

export const login = async (name:string, password:string) => {
  //compare here later
  try {
    const user = User.findOne({name})
    return user
  } catch (error) {
    console.log(error)
  }
}