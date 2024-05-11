import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { AdminService } from "./admin.service";


const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.getAllFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AdminService.updateIntoDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const AdminController = {
    getAllFromDB,
    updateIntoDB
}