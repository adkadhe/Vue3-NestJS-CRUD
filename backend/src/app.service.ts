import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SubmitDetailsDto } from './employee.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  add(data) {
    return this.prisma.employeeMaster.create({ data: data as any });
  }

  async getAll(query) {
    const whereCondition: Prisma.EmployeeMasterWhereInput = {};
    if (query.term) {
      whereCondition.OR = [
        { firstName: { contains: query.term, mode: 'insensitive' } },
        { mobileNumber: { contains: query.term, mode: 'insensitive' } },
      ];
    }
    return await this.prisma.employeeMaster.findMany({
      select: {
        firstName: true,
        lastName: true,
        email: true,
        mobileNumber: true,
        address: true,
        birthday: true,
        department: true,
        id: true,
        createdAt: true,
        city: true,
        zipCode: true,
      },
      orderBy: { createdAt: 'desc' },
      where: whereCondition,
    });
  }

  edit(id: number, payload: SubmitDetailsDto) {
    return this.prisma.employeeMaster.update({
      where: { id },
      data: {
        firstName: payload.firstName ? payload.firstName : undefined,
        lastName: payload.lastName ? payload.lastName : undefined,
        mobileNumber: payload.mobileNumber ? payload.mobileNumber : undefined,
        address: payload.address ? payload.address : undefined,
        birthday: payload.birthday ? payload.birthday : undefined,
        department: payload.department ? payload.department : undefined,
        email: payload.email ? payload.email : undefined,
        zipCode: payload.zipCode ? payload.zipCode : undefined,
        city: payload.city ? payload.city : undefined,
      },
    });
  }

  delete(id: number) {
    return this.prisma.employeeMaster.delete({
      where: { id },
    });
  }
}
