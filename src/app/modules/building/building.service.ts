import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.post('/buildings', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
 }
const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.get('/buildings', {params: req.query})
    return response
 }
const getByIdFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.get(`/buildings/${id}`)
    return response
 }
const updateByIdIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.patch(`/buildings/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
 }
const deleteByIdIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.delete(`/buildings/${id}`,{
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
 }

 export const BuildingService = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateByIdIntoDB,
    deleteByIdIntoDB
 }