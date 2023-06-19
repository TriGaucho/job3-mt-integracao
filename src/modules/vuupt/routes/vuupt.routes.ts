import { Router } from 'express';
import multer from 'multer'
import VuuptController from '../controller/VuuptController';

const vuuptRouter = Router()

const vuuptController = new VuuptController()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

vuuptRouter.get('/:tenantId', vuuptController.get)
vuuptRouter.post('/:tenantId', upload.single('xml'), vuuptController.post, )

export default vuuptRouter
