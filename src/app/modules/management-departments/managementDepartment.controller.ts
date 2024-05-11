import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { ManagementDepartmentService } from "./managementDepartment.service";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ManagementDepartmentService.insertIntoDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ManagementDepartmentService.getAllFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ManagementDepartmentService.getOneFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ManagementDepartmentService.updateFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ManagementDepartmentService.deleteFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const ManagementDepartmentController = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateFromDB,
    deleteFromDB
}