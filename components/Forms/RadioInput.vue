<template>
  <v-radio-group @change="updateValue($event)" :value="value">
    <v-radio
      v-for="radio in items"
      class="radio"
      :key="radio.id"
      :label="radio.name"
      :value="radio.value"
    ></v-radio>
  </v-radio-group>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    required: false,
  },
  items: {
    required: true,
    type: Array,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>

<style lang="scss" scoped></style>
