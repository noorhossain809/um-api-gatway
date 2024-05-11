import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";
import sendResponse from "../../../shared/response";

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const result = await AcademicSemesterService.insertIntoDB(req)
     sendResponse(res, result)
   } catch (error) {
    next(error)
   }
}
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const result = await AcademicSemesterService.getAllFromDB(req)
     sendResponse(res, result)
   } catch (error) {
    next(error)
   }
}
const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const result = await AcademicSemesterService.getOneFromDB(req)
     sendResponse(res, result)
   } catch (error) {
    next(error)
   }
}
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const result = await AcademicSemesterService.updateOneIntoDB(req)
     sendResponse(res, result)
   } catch (error) {
    next(error)
   }
}
const deleteOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
   try {
     const result = await AcademicSemesterService.deleteOneIntoDB(req)
     sendResponse(res, result)
   } catch (error) {
    next(error)
   }
}

export const AcademicSemesterController = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateOneIntoDB,
    deleteOneIntoDB
}