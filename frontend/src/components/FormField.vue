<script setup lang="ts">
const props = defineProps<{
  label?: string;
  name: string;
  hintText?: string;
  errors?: Partial<Record<string, string | undefined>>;
}>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="form-control">
    <label
      v-if="props.label"
      :for="name"
      class="font-normal text-left pb-2 text-sm"
    >
      <span class="label-text">{{ label }}</span>
    </label>
    <slot></slot>
    <div
      v-if="props.hintText && props.errors && !props.errors[props.name]"
      class="label"
    >
      <span class="label-text-alt">{{ props.hintText }}</span>
    </div>
    <div v-if="props.errors && props.errors[props.name]" class="label">
      <span class="label-text-alt text-error">
        {{ props.errors[props.name] }}
      </span>
    </div>
  </div>
</template>
