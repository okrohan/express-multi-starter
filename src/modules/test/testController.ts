import { Request, Response } from "express";
import { Logger } from "../../helpers/logger/Logger";
import { TestService } from "./testService";

interface ICreateUserPayload {
    age: number;
    firstName: string;
    lastName: string
}

export class TestController {
    static async createUser(req: Request, res: Response) {
        const body = req.body as ICreateUserPayload
        Logger.info('Create User', body)
        try {
            const user = await TestService.createUser(body)
            res.status(200).json(user)
        } catch (err) {
            Logger.info('Error', err)
            res.status(500).json({status: 'error'})
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const queryParams = req.query
            Logger.info('Get user', queryParams)
            const page = queryParams.page ? Number(queryParams.page) : 0
            const count = queryParams.count ? Number(queryParams.count) : 10
            const sortBy = queryParams.sortBy as string || 'firstName'
            const sortOrder = queryParams.sortOrder as string || 'ASC'
            const users = await TestService.getAllUsers({count, page, sortBy, sortOrder})
            res.status(200).json(users)
        } catch (err) {
            Logger.info('Error', err)
            res.status(500).json({status: 'error'})
        }
    }
}