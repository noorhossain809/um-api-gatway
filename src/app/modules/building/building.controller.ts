import { NextFunction, Request, Response } from "express";
import { BuildingService } from "./building.service";
import sendResponse from "../../../shared/response";

const insertIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.insertIntoDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.getAllFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getByIdFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.getByIdFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateByIdIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.updateByIdIntoDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const deleteByIdIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.deleteByIdIntoDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const BuildingController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateByIdIntoDB,
    deleteByIdIntoDB
}