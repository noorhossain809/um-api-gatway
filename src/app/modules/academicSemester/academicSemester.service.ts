import { Request } from "express";
import { CoreService as HttpService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const insertIntoDB = async (req: Request) : Promise<IGenericResponse> => {

    const response : IGenericResponse = await HttpService.post('/academic-semester', req.body, {
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await HttpService.get('/academic-semester',{
        params: req.query,
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}
const getOneFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.get(`/academic-semester/${id}`,{
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}
const updateOneIntoDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.patch(`/academic-semester/${id}`,req.body,{
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}
const deleteOneIntoDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.delete(`/academic-semester/${id}`,{
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}

export const AcademicSemesterService = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateOneIntoDB,
    deleteOneIntoDB
}