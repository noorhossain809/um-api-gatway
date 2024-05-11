import express from 'express'
import { AcademicSemesterController } from './academicSemester.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.get('/', 
AcademicSemesterController.getAllFromDB)
router.get('/:id', 
AcademicSemesterController.getOneFromDB)
router.post('/', 
auth(ENUM_USER_ROLE.ADMIN),
AcademicSemesterController.insertIntoDB)
router.patch('/:id', 
auth(ENUM_USER_ROLE.ADMIN),
AcademicSemesterController.updateOneIntoDB)
router.delete('/:id', 
auth(ENUM_USER_ROLE.ADMIN),
AcademicSemesterController.deleteOneIntoDB)


export const AcademicSemesterRoutes = router