import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidation } from './course.validation'
import { CourseController } from './Course.controller'

const router = express.Router()

router.get('/', 
CourseController.getAllFromDB)

router.get('/:id', 
CourseController.getByIdFromDB)

router.post('/', 
validateRequest(CourseValidation.createCourseZodSchema),
auth(ENUM_USER_ROLE.ADMIN),
CourseController.insertIntoDB)

router.patch('/:id', 
validateRequest(CourseValidation.update),
auth(ENUM_USER_ROLE.ADMIN),
CourseController.updateByIdFromDB)

router.delete('/:id', 
auth(ENUM_USER_ROLE.ADMIN),
CourseController.deleteByIdFromDB)

export const CourseRoutes = router