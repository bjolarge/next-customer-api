import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(Customer)
    private readonly customerRepository:Repository<Customer>,
    ){}
   private customers:Customer[] = [
    {
    id:1,
    name:'Biola Badmus',
    address:'Mobile Money',
    bestdeal:'10% discount',
    emailAddress:'joe@gmail.com'
    }
   ];

   findAll(){
    return this.customerRepository.find();
   }

 async findOne(id){
 const customer = await this.customerRepository.findOne(id);
 if(!customer)
 {
    throw new NotFoundException(`Coffee with this ${id} cannot be found`);
 }else {return customer}
   }

   async create(createCustomerDto:CreateCustomerDto){
     const customer = await this.customerRepository.create(createCustomerDto);
     return this.customerRepository.save(customer);
   }

   async update(id, updateCustomerDto:UpdateCustomerDto){
    const existingCustomer = await this.customerRepository.preload({
        id:+id,
        ...updateCustomerDto
     });
     if(!existingCustomer){
        throw new NotFoundException(`Customer with a given ${id} was not found`);
     }
     else {return this.customerRepository.save(existingCustomer)}
    }


   async remove(id){
    const removedCustomer = await this.customerRepository.findOne(id);
    return this.customerRepository.remove(removedCustomer);
   }
}
