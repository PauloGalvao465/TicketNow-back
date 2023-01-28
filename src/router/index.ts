import { Router } from "express";
import { companyRouter } from "./users/company.router";
import { userRouter } from "./users/user.router";

const router = Router();

router.use("/user", userRouter);
router.use("/company", companyRouter);

export { router };
