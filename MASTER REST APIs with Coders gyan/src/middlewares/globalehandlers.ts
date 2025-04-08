// Global error handler

import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

const globalErrorHandler = (
    err: HttpError, 
    req: Request, 
    res: Response, 
    next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message,
        errorStack: config.env === 'development' ? err.stack : '',
    });
};

export default globalErrorHandler;