<script setup lang="ts">
import { EmployeePayloadSchema, type EmployeePayload } from "@/types/employee";
const router = useRouter();
const employeeStore = useEmployeeStore();
const { employeeData } = employeeStore;
const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: EmployeePayloadSchema,
});

const { value: firstName } = useField<string>("firstName");
const { value: lastName } = useField<string>("lastName");
const { value: email } = useField<string>("email");
const { value: mobileNumber } = useField<string>("mobileNumber");
const { value: address } = useField<string>("address");
const { value: birthday } = useField<string>("birthday");
const { value: department } = useField<string>("department");
const { value: city } = useField<string>("city");
const { value: zipCode } = useField<string>("zipCode");
const id = ref<Number>(0);
onMounted(() => {
  if (employeeData) {
    firstName.value = employeeData.firstName;
    lastName.value = employeeData.lastName;
    email.value = employeeData.email;
    mobileNumber.value = employeeData.mobileNumber;
    address.value = employeeData.address ? employeeData.address : "";
    birthday.value = new Date(employeeData.birthday)
      .toISOString()
      .split("T")[0];
    department.value = employeeData.department;
    city.value = employeeData.city;
    zipCode.value = employeeData.zipCode;
    id.value = parseInt(employeeData.id);
  }
});

const emits = defineEmits<{
  (e: "success"): void;
}>();

const departmentList = [
  {
    key: "HR",
    value: "HR",
  },
  {
    key: "Engineering",
    value: "Engineering",
  },
  {
    key: "Marketing",
    value: "Marketing",
  },
  {
    key: "Planning",
    value: "Planning",
  },
  {
    key: "Admin",
    value: "Admin",
  },
  {
    key: "Sales",
    value: "Sales",
  },
];

const onSubmit = handleSubmit(async (values) => {
  const payload: EmployeePayload = {
    firstName: values.firstName,
    lastName: values.lastName,
    mobileNumber: values.mobileNumber,
    address: values.address,
    birthday: values.birthday,
    department: values.department,
    email: values.email,
    zipCode: values.zipCode,
    city: values.city,
  };
  if (!id.value) {
    await employeeStore.add(payload);
    router.go(0);
  } else {
    const userId = id.value;
    await employeeStore.update(userId as unknown as number, payload);
    router.replace({ name: "list" });
  }
  emits("success");
});


</script>
<template>
  <div class="flex justify-center gap-0 h-[60vh]">
    <div class="px-3 mt-2 w-[60%]">
      <div class="card w-full bg-base-100 shadow-sm min-h-[80vh]">
        <div class="card-body text-left pt-1">
          <div class="mt-2 mb-3 w-full">
            <div class="p-2">
              <div
                class="w-full pb-4 mt-0 rounded-md shadow-sm card bg-base-100"
              >
                <div class="pt-2 card-body">
                  <form class="space-y-6" @submit="onSubmit">
                    <h2
                      class="font-bold text-lg text-center uppercase border-b-2 pb-3 text-sky-800"
                    >
                      Employee Registration
                    </h2>
                    <div class="all-fileds mt-5">
                      <div class="py-5 pt-2 mt-3">
                        <div
                          class="flex flex-row justify-center gap-4 flex-wrap pb-2"
                        >
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="firstName"
                              name="firstName"
                              label="First Name"
                              type="text"
                              :errors="errors"
                              autocomplete="firstName"
                              placeholder="Enter First Name"
                            ></InputText>
                          </div>
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="lastName"
                              name="lastName"
                              label="Last Name"
                              type="text"
                              :errors="errors"
                              autocomplete="lastName"
                              placeholder="Enter Last Name"
                            ></InputText>
                          </div>
                        </div>
                        <div
                          class="flex flex-row justify-center gap-4 flex-wrap pb-2"
                        >
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="email"
                              name="email"
                              label="Email ID"
                              type="email"
                              :errors="errors"
                              autocomplete="email"
                              placeholder="test@gmail.com"
                            ></InputText>
                          </div>
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="mobileNumber"
                              name="mobileNumber"
                              label="Mobile Number"
                              type="text"
                              :errors="errors"
                              autocomplete="mobileNumber"
                              placeholder="Enter Mobile Number"
                            ></InputText>
                          </div>
                        </div>
                        <div
                          class="flex flex-row justify-center gap-4 flex-wrap pb-2"
                        >
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="city"
                              name="city"
                              label="City"
                              type="text"
                              :errors="errors"
                              autocomplete="city"
                              placeholder="Enter City"
                            ></InputText>
                          </div>
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="zipCode"
                              name="zipCode"
                              label="ZIP Code"
                              type="text"
                              :errors="errors"
                              autocomplete="zipCode"
                              placeholder="Enter ZIP Code"
                            ></InputText>
                          </div>
                        </div>
                        <div
                          class="flex flex-row justify-center gap-4 flex-wrap pb-2"
                        >
                          <div class="form-control w-[50%] max-w-xs">
                            <InputText
                              v-model="birthday"
                              name="birthday"
                              label="Birthday"
                              type="date"
                              :errors="errors"
                              autocomplete="birthday"
                              placeholder="Enter birthday"
                            ></InputText>
                          </div>
                          <div class="form-control w-[50%] max-w-xs">
                            <InputSelect
                              v-model="department"
                              name="department"
                              label="Department"
                              type="select"
                              :options="departmentList"
                              placeholder="Department"
                              :errors="errors"
                            ></InputSelect>
                          </div>
                        </div>
                        <div
                          class="flex flex-row justify-center gap-4 flex-wrap pb-2"
                        >
                          <div class="form-control w-[87%] max-w-mt">
                            <InputTextarea
                              v-model="address"
                              name="address"
                              label="Address"
                              type="text"
                              :errors="errors"
                              autocomplete="address"
                              placeholder="Enter Address"
                            ></InputTextarea>
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex flex-row justify-center gap-4 flex-wrap pb-2"
                      >
                        <div class="form-control w-[30%] max-w-xs">
                          <button
                            class="btn w-full bg-sky-800 hover:bg-sky-900 uppercase rounded"
                            type="submit"
                            :class="[isSubmitting ? 'loading' : '']"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
