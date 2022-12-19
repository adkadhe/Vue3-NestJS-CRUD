<script setup lang="ts">
const employeeStore = useEmployeeStore();
const { getAllEmployees } = employeeStore;
const { employees, employeeData } = storeToRefs(employeeStore);
const router = useRouter();

onMounted(() => {
  getAllEmployees();
});
const edit = (id: string) => {
  const employeeDetails = employees.value.find((x) => x.id === id);
  employeeData.value = employeeDetails;
  router.replace({ name: "add" });
};

const DeleteData = async (id: string) =>{
  if (confirm("Are you sure you want to delete employee details.")) {
    await employeeStore.deleteUser(id);
    router.go(0);
  }
};
</script>
<template>
  <table
    class="table w-full mt-0 mb-3 border-collapse table-compact listing-table border"
  >
    <!-- head -->
    <thead>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Sr.no
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        First Name
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Last Name
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Department
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Email
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Mobile Number
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        City
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        DOB
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Created Date
      </th>
      <th
        class="text-sm capitalize font-semibold border rounded-none bg-slate-50 pointer-events-none"
      >
        Action
      </th>
    </thead>
    <tbody v-if="employees?.length > 0">
      <tr v-for="(review, index) in employees" :key="index">
        <td class="text-sm border">
          {{ index + 1 }}
        </td>
        <td class="font-normal text-sm border">{{ review.firstName }}</td>
        <td class="font-normal text-sm border">{{ review.lastName }}</td>
        <td class="font-normal text-sm border">
          {{ review.department }}
        </td>
        <td class="font-normal text-sm border">{{ review.email }}</td>
        <td class="font-normal text-sm border">
          {{ review.mobileNumber }}
        </td>
        <td class="font-normal text-sm border">{{ review.city }}</td>
        <td class="font-normal text-sm border">
          {{ new Date(review.birthday).toLocaleDateString() }}
        </td>
        <td class="font-normal text-sm border">
          {{ new Date(review.createdAt).toLocaleDateString() }}
        </td>
        <td class="font-normal text-center">
          <button
            class="font-normal capitalize btn btn-primary btn-xs rounded bg-sky-800 hover:bg-sky-900 text-xs"
            @click="edit(review.id)"
          >
            Edit
          </button>
          |
          <button
            class="font-normal capitalize btn btn-danger btn-xs rounded bg-red-800 hover:bg-red-900 text-xs"
            @click="DeleteData(review.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td align="center" colspan="10">No Review Found</td>
      </tr>
    </tbody>
  </table>
</template>
