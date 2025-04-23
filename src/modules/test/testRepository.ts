import { Test } from "../../models/Test";
import { AppDataSource } from "../../helpers/typeorm/dataSource";
import { IGetAllUsersPayload } from "./types";


export class TestRepository {
    private repository = AppDataSource.getRepository(Test);
  
    async createUser(firstName: string, lastName: string, age: number) {
      const user = new Test();
      user.firstName = firstName;
      user.lastName = lastName;
      user.age = age;
      await this.repository.save(user);
      return user;
    }
  
    async getAllUsers(payload: IGetAllUsersPayload) {
      return this.repository.findAndCount({ skip: payload.page * payload.count, take: payload.count, order: {
        [payload.sortBy]: payload.sortOrder
      }});
    }
  
    async getUserById(id: number) {
      return this.repository.findOne({ where: { id } });
    }
  
    async updateUser(id: number, age: number) {
      const user = await this.repository.findOne({ where: { id } });
      if (user) {
        user.age = age;
        await this.repository.save(user);
        return user;
      }
      return null;
    }
  
    async deleteUser(id: number) {
      const user = await this.repository.findOne({ where: { id } });
      if (user) {
        await this.repository.remove(user);
        return user;
      }
      return null;
    }
  }
  
  export const userRepository = new TestRepository()