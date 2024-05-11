import express, {Request, Response, NextFunction} from 'express'
import { UserController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserZodValidation } from './user.validation'
import { FileUploadHelper } from '../../../helpers/FileUploadHelper'

const router = express.Router()


router.get('/:id', UserController.getOneFromDB)

router.post('/create-student',
FileUploadHelper.upload.single('file'),
(req: Request, res: Response, next: NextFunction) => {
    req.body = UserZodValidation.createStudentZodSchema.parse(JSON.parse((req.body.data)))
    return UserController.createStudent(req, res, next)
}
)

router.post('/create-faculty', 
    FileUploadHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserZodValidation.createFacultyZodSchema.parse(JSON.parse((req.body.data)))
        return UserController.createFaculty(req, res, next)
    }
)
router.post('/create-admin', 
    FileUploadHelper.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserZodValidation.createAdminZodSchema.parse(JSON.parse((req.body.data)))
        return UserController.createAdmin(req, res, next)
    }

)

export const UserRoutes = router