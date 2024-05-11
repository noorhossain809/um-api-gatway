import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { StudentController } from './student.controller'

const router = express.Router()

router.get('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY, ENUM_USER_ROLE.STUDENT), 
StudentController.getOneFromDB)
router.get('/',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY, ENUM_USER_ROLE.STUDENT), 
StudentController.getAllFromDB)


router.get('/my-courses',
auth(ENUM_USER_ROLE.STUDENT), 
StudentController.getMyCourses)

router.get('/my-courses-schedule',
auth(ENUM_USER_ROLE.STUDENT), 
StudentController.getMyCourseSchedules)

router.get('/my-academic-info',
auth(ENUM_USER_ROLE.STUDENT), 
StudentController.getMyAcademicInfo)

router.patch('/:id',
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
StudentController.updateIntoDB)


export const StudentRoutes = router