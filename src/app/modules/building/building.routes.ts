import express from 'express'
import { BuildingController } from './building.controller'
import validateRequest from '../../middlewares/validateRequest'
import { BuildingValidation } from './building.validation'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.get('/',
BuildingController.getAllFromDB)

router.get('/:id',
BuildingController.getByIdFromDB)

router.patch('/:id',
validateRequest(BuildingValidation.update),
auth(ENUM_USER_ROLE.ADMIN),
BuildingController.updateByIdIntoDB)

router.delete('/:id',
auth(ENUM_USER_ROLE.ADMIN),
BuildingController.deleteByIdIntoDB)

router.post('/', 
auth(ENUM_USER_ROLE.ADMIN),
validateRequest(BuildingValidation.createBuildingsZodSchema),
BuildingController.insertIntoDB)

export const BuildingRoutes = router