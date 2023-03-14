import { IsString } from "class-validator";
export class CreateCustomerDto {
   @IsString()
   readonly name:string;
   @IsString()
   readonly brand:string; 
   @IsString()
   readonly address:string;
   @IsString()
   readonly bestdeal:string;
   @IsString()
   readonly emailAddress:string;
}
