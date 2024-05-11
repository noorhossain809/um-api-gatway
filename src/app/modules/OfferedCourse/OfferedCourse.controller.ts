import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { CourseService } from "./OfferedCourse.service";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await CourseService.insertIntoDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await CourseService.getAllFromDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const CourseController = {
    insertIntoDB,
    getAllFromDB
}