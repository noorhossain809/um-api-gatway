import { NextFunction, Request, Response } from "express";
import { SemesterRegistrationService } from "./semesterRegistration.service";
import sendResponse from "../../../shared/response";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.insertIntoDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.getAllFromDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.getOneFromDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.updateIntoDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const deleteIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.deleteIntoDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getMyRegistration = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.getMyRegistration(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const startMyRegistration = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.startMyRegistration(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getMySemesterRegCourses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.getMySemesterRegCourses(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const enrolledIntoCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.enrolledIntoCourse(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const withdrawFromCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.withdrawFromCourse(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const confirmMyRegistration = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.confirmMyRegistration(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const startNewSemester = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.startNewSemester(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const SemesterRegistrationController = {
    insertIntoDB,
    getAllFromDB,
    updateIntoDB,
    getOneFromDB,
    deleteIntoDB,
    getMyRegistration,
    startMyRegistration,
    getMySemesterRegCourses,
    enrolledIntoCourse,
    withdrawFromCourse,
    confirmMyRegistration,
    startNewSemester
}