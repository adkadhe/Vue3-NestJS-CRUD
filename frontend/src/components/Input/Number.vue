<script setup lang="ts">
const props = defineProps<{
  modelValue?: number;
  label?: string;
  name: string;
  hintText?: string;
  errors?: Partial<Record<string, string | undefined>>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
}>();

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
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
    <input
      type="number"
      :value="props.modelValue"
      class="input input-sm input-bordered w-full max-w-xs rounded-sm text-slate-600"
      v-bind="$attrs"
      @input="handleInput"
    />
  </FormField>
</template>
