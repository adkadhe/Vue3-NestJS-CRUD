import { Body, Controller, Get, HttpCode } from '@nestjs/common';
import { Delete, Param, Post, Put, Query } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { GetEmployeeQuerytDto, SubmitDetailsDto } from './employee.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Post('add')
  async submitDetails(@Body() submitDetails: SubmitDetailsDto) {
    const result = await this.appService.add(submitDetails);
    return {
      success: true,
      data: result,
      message: 'Details saved successfuly',
    };
  }

  @HttpCode(200)
  @Get('list')
  async getList(@Query() query: GetEmployeeQuerytDto) {
    const result = await this.appService.getAll(query);
    return {
      success: true,
      data: result,
      message: 'Details saved successfuly',
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDetails: SubmitDetailsDto,
  ){
    const result = await this.appService.edit(id, updateDetails);
    return {
      success: true,
      data: result,
      message: 'Details updated successfuly',
    };
  }

  @Delete(':id')
  async deleteDetails(@Param('id') id: number) {
    const result = await this.appService.delete(id);
    return {
      success: true,
      data: result,
      message: 'Data removed sucessfully',
    };
  }
}
