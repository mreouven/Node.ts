// mongoose exemple with interface
import {Schema,model,Document} from 'mongoose';

var userCompany = new Schema({ 
    // username:{type: String ,required: true},
    name:{type: String ,required: true},
    password:{type: String ,required: true},
    email:{type: String ,required: true},
    type:{type: String ,required: true},
 });

let company = new Schema({
    // using array model
    user:{type: [userCompany] ,required: true},
    phone:{type: String ,required: true},
    company:{type: String ,required: true},
    country :{type: String ,required: true},
    origine :{type: String },
    companySize :{type: Number ,required: true},
    createdAt :{type: Date ,required: true,default:new Date()},

});


// Export models
export let Company= model('company', company);
export let UserC= model('user', userCompany);
// Export interface
export interface IuserCompany extends Document {
    name: string;
    password: string;
    email: string;
    type: string;
  }
export interface Icompany extends Document {
    user:IuserCompany,
    phone:string,
    company:string,
    country: string;
    origine: string;
    companySize: number;
    createdAt?: Date;
  }