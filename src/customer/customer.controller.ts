import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Query,UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto/update-customer.dto';

@UsePipes(ValidationPipe)
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService) {}
    @Get()
    findAll(@Query()paginationquery){
        const {limit, offset} = paginationquery;
return this.customerService.findAll();
    }
    @Get(':id')
    findOne(@Param('id')id){
      return this.customerService.findOne(id);
    }

    @Post()
    create(@Body()createCustomerDto:CreateCustomerDto){
      return this.customerService.create(createCustomerDto);
    }

    @Patch(':id')
    update(@Param('id')id:string,@Body()updateCustomerDto:UpdateCustomerDto){
       return this.customerService.update(id, updateCustomerDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id:string){
      return this.customerService.remove(id);
    }
}

