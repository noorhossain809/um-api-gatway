import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidation } from './OfferedCourse.validation'
import { CourseController } from './OfferedCourse.controller'

const router = express.Router()

router.get('/', 
auth(ENUM_USER_ROLE.ADMIN),
CourseController.getAllFromDB)
router.post('/', 
auth(ENUM_USER_ROLE.ADMIN),
CourseController.insertIntoDB)

export const OfferedCourseRoutes = router