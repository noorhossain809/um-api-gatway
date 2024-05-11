import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.post('/rooms', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.get('/rooms', {
        params: req.query
    })
    return response
}
const getByIdFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await CoreService.get(`/rooms/${id}`)
    return response
}
const updateByIdFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await CoreService.patch(`/rooms/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const deleteByIdFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await CoreService.delete(`/rooms/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const RoomsService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB, 
    updateByIdFromDB,
    deleteByIdFromDB
}