import $api from "@/plugin/axios";
import type {
  ApiResponse,
  EmployeePayload,
  EmployeesResponse,
} from "@/types/employee";
export const useEmployeeStore = defineStore("employee", () => {
  const employees = ref<EmployeesResponse[]>([]);
  const employeeData = ref<EmployeesResponse>()
  const minimumCharaters: number = 3;
  const term = ref<string>("");
  async function add(payload: EmployeePayload) {
    payload.birthday = new Date(payload.birthday);
    await $api.post("http://localhost:3000/add", payload);
  }

  async function update(id: number, payload: EmployeePayload) {
    payload.birthday = new Date(payload.birthday);
    const url = `http://localhost:3000/${id}`;
    await $api.put(url, payload);
  }

  async function getAllEmployees(){
    const params = {
      term: term.value.length >= minimumCharaters ? term.value : undefined,
    };
    try {
      const response = await $api.get<ApiResponse<EmployeesResponse[]>>(
        `http://localhost:3000/list`,
        { params }
      );

      const {
        data: { data },
      } = response;

      employees.value = data
    } catch (error) { }
  }

  async function deleteUser(id: string) {
    const url = `http://localhost:3000/${id}`;
    await $api.delete(url);
  }

  return {
    add,
    employees,
    getAllEmployees,
    employeeData,
    update,
    minimumCharaters,
    term,
    deleteUser
  };
});
