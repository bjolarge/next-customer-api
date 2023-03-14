import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    address:string; 
    @Column()
    bestdeal:string;
    @Column()
    emailAddress:string;
}