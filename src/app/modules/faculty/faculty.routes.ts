import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { FacultyController } from './faculty.controller'

const router = express.Router()

router.get('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
FacultyController.getOneFromDB)
router.get('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
FacultyController.getAllFromDB)
router.get('/all',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
FacultyController.getAllCoreFromDB)
router.patch('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
FacultyController.updateIntoDB)

router.get('/my-courses', auth(ENUM_USER_ROLE.FACULTY), FacultyController.myCourses)
router.get('/my-course-student', auth(ENUM_USER_ROLE.FACULTY), FacultyController.myCourseStudent)

export const FacultyRoutes = router