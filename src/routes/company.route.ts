import {Router} from 'express';
import {CompanyApi} from '../controllers/company.controller';
import { requirements  } from "../middleware/requirements.middleware";

export class CompanyRouter {
    public router=Router();
    private controllerApi = new CompanyApi();
    constructor() {
        this.intializeRoutes();
    }
    public intializeRoutes() {
        // using middlewares
        this.router.post('/create',[requirements(["email", "password", "name", "phone", "company", "country", "origine", "companySize"])], this.controllerApi.create);
       
      }
}








