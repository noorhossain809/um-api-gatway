import { NextFunction, Request, Response } from "express";
import { AcademicDepartmentService } from "./academicDepartment.service";
import sendResponse from "../../../shared/response";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.insertIntoDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.getAllFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.getOneFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.updateOneFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const deleteOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.deleteOneFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const AcademicDepartmentController = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateOneFromDB,
    deleteOneFromDB
}