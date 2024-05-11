import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { AcademicFacultyService } from "./academicFaculty.service";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.insertIntoDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.getAllFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.getOneFromDB(req)
        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

const updateOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateOneFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateOneFromDB,
    deleteByIdFromDB
}