import { NextFunction, Request, Response } from "express";
import { GenerateResponse } from "./response.creator";

const ErrorHandler = async (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return GenerateResponse(res, 500, {
        error,
    });
};

export { ErrorHandler };