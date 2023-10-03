import { Request, Response, NextFunction } from "express";
export const CatchAsyncError =
  (theFunc: any) => (req: Request, resp: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, resp, next)).catch(next);
  };
