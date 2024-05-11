import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.post('/course', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.get('/course', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getByIdFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await CoreService.get(`/course/${id}`)
    return response
}
const updateByIdFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await CoreService.patch(`/course/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const deleteByIdFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await CoreService.patch(`/course/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const CourseService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateByIdFromDB,
    deleteByIdFromDB
}