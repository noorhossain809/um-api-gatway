import { Request } from "express"
import { CoreService } from "../../../shared/axios"
import { IGenericResponse } from "../../../interfaces/common"

const getAllFromDB = async(req: Request): Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.get('/student-semester-payments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}

// const initiatePayment = async(req: Request): Promise<IGenericResponse> => {
//     console.log('author', req.headers.authorization)
//     const response : IGenericResponse = await CoreService.post('/student-semester-payments/initiate-payment', {
//         headers: {
//             Authorization: req.headers.authorization
//         }
//     })

//     return response
// }


const initiatePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    '/student-semester-payments/initiate-payment',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const completePayment = async(req: Request): Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.post('/student-semester-payments/complete-payment', {
        params: req.body,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}

const getMySemesterPayment = async(req: Request): Promise<IGenericResponse> => {
    const response : IGenericResponse = await CoreService.get('/student-semester-payments/my-semester-payment', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}


export const StudentSemesterPaymentService = {
    initiatePayment,
    completePayment,
    getAllFromDB,
    getMySemesterPayment
}