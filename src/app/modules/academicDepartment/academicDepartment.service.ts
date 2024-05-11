import { Request } from "express";
import {  AuthService, CoreService as HttpService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const insertIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await HttpService.post('/academic-department', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await AuthService.get('/academic-departments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await AuthService.get(`/academic-departments/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const updateOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await AuthService.patch(`/academic-departments/${id}`, req.body,{
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const deleteOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.delete(`/academic-department/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    console.log('response',response);
    return response
}

export const AcademicDepartmentService = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateOneFromDB,
    deleteOneFromDB
}