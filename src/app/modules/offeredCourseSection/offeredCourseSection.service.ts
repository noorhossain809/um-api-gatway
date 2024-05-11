import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const insertIntoDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.post("/offered-course-section", req.body, {
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}
const getAllFromDB = async (req: Request) : Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.get("/offered-course-section", {
        headers: {
            Authorization : req.headers.authorization
        }
    })
    return response
}

export const OfferedCourseSectionService = {
    insertIntoDB,
    getAllFromDB
}