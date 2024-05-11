import { NextFunction, Request, Response } from "express";
import { RoomsService } from "./rooms.service";
import sendResponse from "../../../shared/response";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await RoomsService.insertIntoDB(req);
    sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await RoomsService.getAllFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getByIdFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await RoomsService.getByIdFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const updateByIdIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await RoomsService.updateByIdFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const deleteByIdIntoDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await RoomsService.deleteByIdFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

export const RoomsController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateByIdIntoDB,
    deleteByIdIntoDB
}