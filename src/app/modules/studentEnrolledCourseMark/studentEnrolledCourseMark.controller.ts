import { NextFunction, Request, Response } from "express";
import { StudentEnrolledCourseMarkService } from "./studentEnrolledCourseMark.service";
import sendResponse from "../../../shared/response";

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentEnrolledCourseMarkService.getAllFromDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateMarks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentEnrolledCourseMarkService.updateMarks(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateFinalMarks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentEnrolledCourseMarkService.updateFinalMarks(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getMyCourseMarks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentEnrolledCourseMarkService.getMyCourseMarks(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const StudentEnrolledCourseMarkController = {
    getAllFromDB,
    updateMarks,
    updateFinalMarks,
    getMyCourseMarks
}