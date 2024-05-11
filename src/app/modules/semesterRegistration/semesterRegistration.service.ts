import { Request } from "express";
import { CoreService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.post('/semesters/registration', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await CoreService.get('/semesters', {
        params: req.params,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const getOneFromDB = async (req: Request): Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.get(`/semesters/${id}`, {
        params: req.params,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const updateIntoDB = async (req: Request): Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.patch(`/semesters/${id}`, req.body, {
        params: req.params,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const deleteIntoDB = async (req: Request): Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.delete(`/semesters/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}

const getMyRegistration = async (req: Request): Promise<IGenericResponse> => {
    
    const response: IGenericResponse = await CoreService.get('/semesters/my-registration', {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const startMyRegistration = async (req: Request): Promise<IGenericResponse> => {
    
    const response: IGenericResponse = await CoreService.post('/semesters/start-registration', {}, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const getMySemesterRegCourses = async (req: Request): Promise<IGenericResponse> => {
    
    const response: IGenericResponse = await CoreService.get('/semesters/my-semester-and-courses', {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const enrolledIntoCourse = async (req: Request): Promise<IGenericResponse> => {
    
    const response: IGenericResponse = await CoreService.post('/semesters/enroll-into-course',req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const withdrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
    
    const response: IGenericResponse = await CoreService.post('/semesters/withdraw-from-course', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const confirmMyRegistration = async (req: Request): Promise<IGenericResponse> => {
    
    const response: IGenericResponse = await CoreService.post('/semesters/confirm-my-registration',req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 
const startNewSemester = async (req: Request): Promise<IGenericResponse> => {
    const {id} = req.params
    const response: IGenericResponse = await CoreService.post(`/semesters/${id}/start-new-semester`,req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
} 

export const  SemesterRegistrationService = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateIntoDB,
    deleteIntoDB,
    getMyRegistration,
    startMyRegistration,
    getMySemesterRegCourses,
    enrolledIntoCourse,
    withdrawFromCourse,
    confirmMyRegistration,
    startNewSemester
}