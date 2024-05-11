import { Request } from "express";
import { AuthService, CoreService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const response: IGenericResponse = await AuthService.get('/students', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

const getOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
 
    const {id} = req.params
    const response: IGenericResponse = await AuthService.get(`/students/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const updateIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params

    const response: IGenericResponse = await AuthService.patch(`/students/${id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

const getMyCourses = async(req: Request) : Promise<IGenericResponse> => {
 

    const response: IGenericResponse = await CoreService.get('/students/my-courses', {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

const getMyCoursesSchedule = async(req: Request) : Promise<IGenericResponse> => {
 

    const response: IGenericResponse = await CoreService.get('/students/my-course-schedule', {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

const getMyAcademicInfo = async(req: Request) : Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.get('/students/my-academic-info', {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

export const StudentService = {
    updateIntoDB,
    getAllFromDB,
    getOneFromDB,
    getMyCourses,
    getMyCoursesSchedule,
    getMyAcademicInfo
}