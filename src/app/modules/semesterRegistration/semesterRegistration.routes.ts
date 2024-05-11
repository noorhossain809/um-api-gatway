import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { SemesterRegistrationController } from './semesterRegistration.controller'

const router = express.Router()

router.get('/:id', 
SemesterRegistrationController.getOneFromDB)
router.get('/', 
SemesterRegistrationController.getAllFromDB)


router.post('/registration', 
auth(ENUM_USER_ROLE.ADMIN),
SemesterRegistrationController.insertIntoDB)

router.patch('/:id', 
SemesterRegistrationController.updateIntoDB)
router.patch('/:id', 
SemesterRegistrationController.deleteIntoDB)
router.get('/my-registration', 
SemesterRegistrationController.getMyRegistration)
router.post('/start-registration', 
SemesterRegistrationController.startMyRegistration)
router.get('/my-semester-and-courses', 
SemesterRegistrationController.getMySemesterRegCourses)
router.post('/enrolled-into-course', SemesterRegistrationController.enrolledIntoCourse)
router.post('/withdraw-from-course', SemesterRegistrationController.withdrawFromCourse)
router.post('/confirm-my-registration', SemesterRegistrationController.confirmMyRegistration)
router.post('/:id/start-new-semester', SemesterRegistrationController.startNewSemester)


export const SemesterRegistrationRoutes = router