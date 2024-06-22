import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller'

const router = express.Router()


router.get('/', auth(ENUM_USER_ROLE.FACULTY, ENUM_USER_ROLE.ADMIN), StudentSemesterPaymentController.getAllFromDB)
router.post('/initiate-payment', auth(ENUM_USER_ROLE.STUDENT), StudentSemesterPaymentController.initiatePayment)
router.get('/my-semester-payment', auth(ENUM_USER_ROLE.STUDENT), StudentSemesterPaymentController.getMySemesterPayment)
router.post('/complete-payment', auth(ENUM_USER_ROLE.STUDENT), StudentSemesterPaymentController.completePayment)


export const StudentSemesterPaymentRouter = router