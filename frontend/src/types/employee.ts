import { date, object, string } from "yup";
import type { InferType } from "yup";

export const EmployeePayloadSchema = object({
  firstName: string().required().label("First Name"),
  lastName: string().required().label("Last Name"),
  email: string().email().required().label("Email"),
  mobileNumber: string().required().label("Mobile Number"),
  address: string().optional().label("Address"),
  city: string().required().label("City"),
  zipCode: string().required().label("Zip Code"),
  birthday: date().required().label("Birthday"),
  department: string().required().label("Department"),
});

export type EmployeePayload = InferType<typeof EmployeePayloadSchema>;

export interface EmployeesResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  address?: string;
  city: string;
  zipCode: string;
  birthday: string;
  department: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  sucesss: boolean;
  message: string;
}

