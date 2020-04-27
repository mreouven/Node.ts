
import { Request, Response } from "express";
import { UserC, Company,IuserCompany,Icompany } from "../models/company.model";
import { Document } from "mongoose";
import  * as bcrypt from "bcryptjs";


export class CompanyApi {
    // controller fonction
    create = async (req: Request, res: Response) => {
        const { email, password, name, phone, company, country, origine, companySize }= req.body;
        try {
            let c = await Company.findOne({
                $or: [
                    { "user.email": email }
                ]

            });
            if (c) {
                let msg:Array<string>=[];
                if (company.user.email == email) msg.push('Email Already Exists');
                return res.status(400).json({
                    error: 2342,
                    msg: msg
                });
            }
            const salt = await bcrypt.genSalt(10);
       
            let user:IuserCompany={
                name: name,
                password: await bcrypt.hash(password, salt),
                email: email,
                type :'admin' 
            };
            var companies:Icompany={
                phone:phone,
                country,
                origine,
                companySize,
                company,
                user: user,
              }
            let newCompany = new Company(companies);
            
              newCompany.save();
              res.status(200).json({
                ok:'ok'
              });

        } catch (error) {
            res.status(500).send({
                message: "Error in Saving"
            });
        }
    };

 

}

