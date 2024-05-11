import express from 'express'
import { AcademicDepartmentController } from './academicDepartment.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.get('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
AcademicDepartmentController.getOneFromDB)
router.get('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
AcademicDepartmentController.getAllFromDB)
router.post('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN), 
AcademicDepartmentController.insertIntoDB)
router.patch('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN), 
AcademicDepartmentController.updateOneFromDB)
router.delete('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN), 
AcademicDepartmentController.deleteOneFromDB)

export const AcademicDepartmentRoutes = router