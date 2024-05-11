import { Request } from "express";
import {  AuthService, CoreService as HttpService } from "../../../shared/axios";
import { IGenericResponse } from "../../../interfaces/common";

const insertIntoDB = async(req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await HttpService.post('/academic-faculty', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await HttpService.get('/academic-faculty', {
      params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}
const getOneFromDB = async(req: Request) : Promise<IGenericResponse> => {
    const {id} = req.params
    const response : IGenericResponse = await HttpService.get(`/academic-faculty/${id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    })
    return response
}

const updateOneFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/academic-faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicFacultyService = {
    insertIntoDB,
    getAllFromDB,
    getOneFromDB,
    updateOneFromDB,
    deleteByIdFromDB
}