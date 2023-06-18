import { Router } from 'express';

import VuuptController from '../controller/VuuptController';

const vuuptRouter = Router()

const vuuptController = new VuuptController()

vuuptRouter.get('/:tenantId', vuuptController.get)

export default vuuptRouter