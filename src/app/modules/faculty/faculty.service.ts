import { Request } from "express";
import { AuthService, CoreService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
 

    const response: IGenericResponse = await AuthService.get('/faculties', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
 const {id} = req.params

    const response: IGenericResponse = await AuthService.get(`/faculties/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllCoreFromDB = async(req: Request) : Promise<IGenericResponse> => {
 

    const response: IGenericResponse = await CoreService.get('/faculties', {
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


const myCourses = async(req: Request) : Promise<IGenericResponse> => {
 

    const response: IGenericResponse = await CoreService.get('/faculties/my-courses', {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const myCourseStudent = async(req: Request) : Promise<IGenericResponse> => {
 

    const response: IGenericResponse = await CoreService.get('/faculties/my-course-student', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const FacultyService = {
    updateIntoDB,
    getAllFromDB,
    getOneFromDB,
    myCourses,
    myCourseStudent,
    getAllCoreFromDB
}