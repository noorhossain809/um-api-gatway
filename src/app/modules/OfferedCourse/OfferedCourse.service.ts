import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.post('/offer-courses', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.get('/offer-courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const CourseService = {
    insertIntoDB,
    getAllFromDB
}