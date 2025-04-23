import { RequestHandler, Router } from "express";
import { TestController } from "./testController";
import { validateUser } from "./testValidators";

export const testRouter = Router();

testRouter.post("/", validateUser as RequestHandler, TestController.createUser);
testRouter.get("/", TestController.getAll);
