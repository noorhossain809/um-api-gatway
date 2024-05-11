import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { AcademicFacultyController } from './academicFaculty.controller'

const router = express.Router()

router.get('/:id',
auth(ENUM_USER_ROLE.ADMIN), 
AcademicFacultyController.getOneFromDB)

router.get('/',
auth(ENUM_USER_ROLE.ADMIN), 
AcademicFacultyController.getAllFromDB)
router.post('/',
auth(ENUM_USER_ROLE.ADMIN), 
AcademicFacultyController.insertIntoDB)

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.updateOneFromDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.deleteByIdFromDB
);

export const AcademicFacultyRoutes = router