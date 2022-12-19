<script setup lang="ts">
interface SelectOptions {
  key: string | number;
  value: string | number;
}
const props = defineProps<{
  modelValue?: string;
  label?: string;
  name: string;
  hintText?: string;
  errors?: Partial<Record<string, string | undefined>>;
  options: SelectOptions[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
}>();

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <FormField
    :label="props.label"
    :name="props.name"
    :hint-text="props.hintText"
    :errors="props.errors"
  >
    <select
      :value="props.modelValue"
      class="select select-sm select-bordered text-slate-600 font-normal rounded-sm"
      v-bind="$attrs"
      @change="handleChange"
    >
      <slot
        ><option value="" disabled selected hidden>
          Select {{ $attrs.placeholder }}
        </option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
        >
          {{ option.key }}
        </option></slot
      >
    </select>
  </FormField>
</template>
