import { NextFunction, Request, Response } from "express"
import { StudentSemesterPaymentService } from "./studentSemesterPayment.service"
import sendResponse from "../../../shared/response"

const getAllFromDB = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentSemesterPaymentService.getAllFromDB(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const initiatePayment = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentSemesterPaymentService.initiatePayment(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}
const completePayment = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentSemesterPaymentService.completePayment(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}

const getMySemesterPayment = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentSemesterPaymentService.getMySemesterPayment(req)

        sendResponse(res, result)
    } catch (error) {
        next(error)
    }
}


export const StudentSemesterPaymentController = {
    initiatePayment,
    completePayment,
    getAllFromDB,
    getMySemesterPayment
}