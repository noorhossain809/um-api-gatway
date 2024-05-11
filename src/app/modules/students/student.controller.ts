import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { StudentService } from "./student.service";

const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentService.getAllFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getOneFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentService.getOneFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentService.updateIntoDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

const getMyCourses = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentService.getMyCourses(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getMyCourseSchedules = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentService.getMyCoursesSchedule(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getMyAcademicInfo = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentService.getMyAcademicInfo(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const StudentController = {
    updateIntoDB,
    getAllFromDB,
    getOneFromDB,
    getMyCourses,
    getMyCourseSchedules,
    getMyAcademicInfo
}