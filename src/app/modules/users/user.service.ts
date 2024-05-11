import { Request } from "express"
import { FileUploadHelper } from "../../../helpers/FileUploadHelper"
import { ICloudinaryResponse, IFileUpload } from "../../../interfaces/file"
import { AuthService } from "../../../shared/axios"
import { IGenericResponse } from "../../../interfaces/common"

const createStudent = async(req: Request) => {
    const file = req.file as IFileUpload
    const uploadImage : ICloudinaryResponse = await FileUploadHelper.uploadCloudinary(file)
    if(uploadImage){
        req.body.student.profileImage = uploadImage.secure_url
    }

    const {academicSemester,academicDepartment, academicFaculty} = req.body.student
    
    const academicSemesterResponse = await AuthService.get(`/academic-semesters?syncId=${academicSemester}`)
    console.log('academicSemesterResponse', academicSemesterResponse);
    if(academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)){
        req.body.student.academicSemester = academicSemesterResponse.data[0]._id
    }

    const academicDepartmentResponse = await AuthService.get(`/academic-departments?syncId=${academicDepartment}`)
    console.log('academicDepartmentResponse', academicDepartmentResponse);
    if(academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)){
        req.body.student.academicDepartment = academicDepartmentResponse.data[0]._id
    }

    const academicFacultyResponse = await AuthService.get(`/academic-faculties?syncId=${academicFaculty}`)
    if(academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)){
        req.body.student.academicFaculty = academicFacultyResponse.data[0]._id
    }

    const response : IGenericResponse = await AuthService.post('/users/create-student', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    console.log(response);
    return response
}

const createFaculty = async(req: Request) => {
    const file = req.file as IFileUpload
    const uploadImage : ICloudinaryResponse = await FileUploadHelper.uploadCloudinary(file)
    if(uploadImage){
        req.body.faculty.profileImage = uploadImage.secure_url
    }

    const {academicDepartment,academicFaculty} = req.body.faculty

    const academicDepartmentResponse = await AuthService.get(`/academic-departments?syncId=${academicDepartment}`)
    //console.log('academicDepartmentResponse', academicDepartmentResponse);
    if(academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)){
        req.body.faculty.academicDepartment = academicDepartmentResponse.data[0]._id
    }

    const academicFacultyResponse = await AuthService.get(`/academic-faculties?syncId=${academicFaculty}`)
    // console.log('academicFacultyResponse', academicFacultyResponse);
    if(academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)){
        req.body.faculty.academicFaculty = academicFacultyResponse.data[0]._id
    }

    const response : IGenericResponse = await AuthService.post('/users/create-faculty', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    // console.log(response);
    return response
}
const createAdmin = async(req: Request) => {
    const file = req.file as IFileUpload
    const uploadImage : ICloudinaryResponse = await FileUploadHelper.uploadCloudinary(file)
    if(uploadImage){
        req.body.admin.profileImage = uploadImage.secure_url
    }

    const response : IGenericResponse = await AuthService.post('/users/create-admins', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    console.log(response);
    return response
}

const getOneFromDB = async(req: Request) => {
    const {id} = req.params

    const response: IGenericResponse = await AuthService.get(`/users/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    }) 
    return response
}

export const UserService = {
    createStudent,
    createFaculty,
    createAdmin,
    getOneFromDB
}