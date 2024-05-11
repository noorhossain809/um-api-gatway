import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { ManagementDepartmentController } from './managementDepartment.controller'

const router = express.Router()

router.get('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
ManagementDepartmentController.getAllFromDB)
router.get('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
ManagementDepartmentController.getOneFromDB)
router.post('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN), 
ManagementDepartmentController.insertIntoDB)
router.patch('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN), 
ManagementDepartmentController.updateFromDB)
router.delete('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.ADMIN), 
ManagementDepartmentController.deleteFromDB)

export const ManagementDepartmentRoutes = router