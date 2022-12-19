import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
export class SubmitDetailsDto {
  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsOptional()
  address: string;

  @IsDateString()
  @IsNotEmpty()
  birthday: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsNotEmpty()
  department: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsNotEmpty()
  city: string;

  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsNumberString()
  @IsNotEmpty()
  zipCode: string;
}

export class GetEmployeeQuerytDto {
  @Transform(({ value }: TransformFnParams) => TrimHelper(value))
  @IsString()
  @IsOptional()
  term: string;
}

const TrimHelper = (value: string) => {
  return typeof value === 'string' ? value.trim() : value;
};
