import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { RoomsController } from './rooms.controller'
import validateRequest from '../../middlewares/validateRequest'
import { RoomValidation } from './rooms.validation'

const router = express.Router()

router.get('/', 
RoomsController.getAllFromDB)

router.get('/:id', 
RoomsController.getByIdFromDB)

router.post('/', 
validateRequest(RoomValidation.createRoomZodSchema),
auth(ENUM_USER_ROLE.ADMIN),
RoomsController.insertIntoDB)

router.patch('/:id', 
validateRequest(RoomValidation.updateRoomZodSchema),
auth(ENUM_USER_ROLE.ADMIN),
RoomsController.updateByIdIntoDB)

router.delete('/:id', 
auth(ENUM_USER_ROLE.ADMIN),
RoomsController.deleteByIdIntoDB)



export const RoomsRoutes = router