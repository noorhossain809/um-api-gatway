import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { FacultyService } from "./faculty.service";

const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getAllFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllCoreFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getAllCoreFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getOneFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.getOneFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.updateIntoDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

const myCourses = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.myCourses(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const myCourseStudent = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await FacultyService.myCourseStudent(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const FacultyController = {
    updateIntoDB,
    getAllFromDB,
    getOneFromDB,
    myCourses,
    myCourseStudent,
    getAllCoreFromDB
}