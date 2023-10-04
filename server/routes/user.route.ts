import express from "express";
import { activateUser, getUserInformation, loginUser, logoutUser, registrationUser, socialLogin, updateAccessToken } from "../controllers/user.controller";
import { authorizeRules, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post('/registration', registrationUser);

userRouter.post('/activate-user', activateUser);

userRouter.post('/login', loginUser);

userRouter.post('/social-auth', socialLogin);

userRouter.get('/logout', isAuthenticated, logoutUser);

userRouter.get('/refreshtoken', updateAccessToken);

userRouter.get('/me', isAuthenticated, getUserInformation);


export default userRouter;