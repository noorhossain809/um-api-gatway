import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller'

const router = express.Router()

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB)
router.get('/my-course-marks', auth(ENUM_USER_ROLE.STUDENT), StudentEnrolledCourseMarkController.getMyCourseMarks)
router.patch('/update-marks', 
auth(ENUM_USER_ROLE.FACULTY), 
StudentEnrolledCourseMarkController.updateMarks)
router.patch('/update-final-marks', 
auth(ENUM_USER_ROLE.FACULTY), 
StudentEnrolledCourseMarkController.updateFinalMarks)


export const StudentEnrolledCourseMarkRoutes = router