import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { AdminController } from './admin.controller'

const router = express.Router()

router.get('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
AdminController.getAllFromDB)
router.patch('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
AdminController.updateIntoDB)


export const AdminRoutes = router