import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const userSchema = z.object({
    firstName: z.string().min(1, "Valid First Name Required"),
    lastName: z.string().min(1),
    age: z.number().min(1)
})

export const userSchemaBulk = z.object({
    data: z.array(userSchema)
})

export const validateUser  = (req: Request, res: Response, next: NextFunction)  => {
    const result = userSchema.safeParse(req.body);
    if(!result.success) {
        return res.status(422).json({errors: result.error})
    }

    next()
}