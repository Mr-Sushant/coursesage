import express from "express";
import { activateUser, getUserInformation, loginUser, logoutUser, registrationUser, socialLogin, updateAccessToken, updateUserInfo } from "../controllers/user.controller";
import { authorizeRules, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.get('/logout', isAuthenticated, logoutUser);

userRouter.get('/refreshtoken', updateAccessToken);

userRouter.get('/me', isAuthenticated, getUserInformation);

userRouter.post('/registration', registrationUser);

userRouter.post('/activate-user', activateUser);

userRouter.post('/login', loginUser);

userRouter.post('/social-auth', socialLogin);

userRouter.put('/update-user', isAuthenticated, updateUserInfo);




export default userRouter;