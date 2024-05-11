import { Request, Response } from "express";
import { CoreService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const getAllFromDB = async(req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.get('/student-enrolled-course-marks', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}
const updateMarks = async(req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.patch('/student-enrolled-course-marks/update-marks',req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}
const updateFinalMarks = async(req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.patch('/student-enrolled-course-marks/update-final-marks',req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}
const getMyCourseMarks = async(req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.get('/student-enrolled-course-marks/my-course-marks', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}


export const StudentEnrolledCourseMarkService = {
    getAllFromDB,
    updateMarks,
    updateFinalMarks,
    getMyCourseMarks
}