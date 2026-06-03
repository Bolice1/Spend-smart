import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { getUsers, getUser } from '../Controllers/user.controllers.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getUser);

export default userRouter;
 
