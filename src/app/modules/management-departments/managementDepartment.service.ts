import { Request } from "express";
import {  AuthService as HttpService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const insertIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await HttpService.post('/management-departments', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await HttpService.get('/management-departments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.get(`/management-departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const updateFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.patch(`/management-departments/${id}`, req.body,{
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const deleteFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.delete(`/management-departments/${id}`,{
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const ManagementDepartmentService = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateFromDB,
    deleteFromDB
}