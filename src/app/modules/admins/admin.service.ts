import { Request } from "express";
import { AuthService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
   
    const response: IGenericResponse = await AuthService.get('/admins', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const updateIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params

    const response: IGenericResponse = await AuthService.patch(`/faculties/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const AdminService = {
    getAllFromDB,
    updateIntoDB
}