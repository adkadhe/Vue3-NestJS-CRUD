<script setup lang="ts">
const employeeStore = useEmployeeStore();
const { term } = storeToRefs(employeeStore);

function getEmployee() {
  employeeStore.getAllEmployees();
}

function fetchAllDataByEnter() {
  const { length } = term.value;
  const { minimumCharaters } = employeeStore;
  if (length > 0 && length < minimumCharaters) {
    return alert(
      `Search Should Contain Atleast ${minimumCharaters} Characters`
    );
  }
  getEmployee();
}
</script>
<template>
  <div class="flex justify-between mt-1">
    <div class="justify-end">
      <input
        v-model="term"
        type="text"
        class="h-[37px] input input-bordered input-sm w-[370px] rounded placeholder:text-xs placeholder:text-slate-400"
        placeholder="Search with First name or Mobile number"
        @keyup.enter="fetchAllDataByEnter"
      />
      <div class="mt-1 text-sm antialiased">
        <span class="italic font-light text-xs"
          >Type and hit enter to search.
        </span>
      </div>
    </div>
  </div>
</template>
