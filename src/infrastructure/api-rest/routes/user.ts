import { Router } from "express";

const router = Router();

router.get("/", (_req: any, res: any) => {
  res.send("ok");
});

export { router };
