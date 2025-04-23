import { Test } from "../../models/Test";
import { IGetAllUsersPayload } from "./types";
import { userRepository } from "./testRepository";


export class TestService {
    public static async createUser(user: Partial<Test>) {
        return userRepository.createUser(user.firstName as string, user.lastName as string, user.age as number)
    }

    public static async getAllUsers(payload: IGetAllUsersPayload) {
        const [data, count] = await userRepository.getAllUsers(payload)
        return { data, count}
    }
}