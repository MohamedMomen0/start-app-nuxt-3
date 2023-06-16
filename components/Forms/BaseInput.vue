<template>
  <!-- =========== Text && Number =========== -->
  <v-text-field
    class="custom_input"
    :class="[type]"
    v-if="
      type == 'text' || type == 'tel' || type == 'email' || type == 'number'
    "
    :rules="allRules"
    :clearable="clearable"
    @click:clear="clearValue"
    @input="updateValue"
    :value="modelValue"
  >
  </v-text-field>

  <!-- =========== Textarea =========== -->
  <v-textarea
    class="custom_input"
    :class="[type]"
    v-else-if="type == 'textarea'"
    :rules="allRules"
    @input="updateValue"
    :value="modelValue"
    :clearable="clearable"
    @click:clear="clearValue"
    filled
  >
    <slot />
  </v-textarea>

  <!-- =========== Password =========== -->
  <v-text-field
    class="custom_input"
    :class="[type]"
    v-else="type == 'password'"
    :rules="allRules"
    @input="updateValue"
    :value="modelValue"
    :clearable="clearable"
    :type="showPass ? 'text' : 'password'"
    :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append-inner="showPass = !showPass"
    @click:clear="clearValue"
  >
    <slot />
  </v-text-field>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    required: true,
  },
  rules: {
    require: false,
    type: Array,
    default: () => [],
  },
  clearable: {
    required: false,
    default: true,
    type: Boolean,
  },
  type: {
    required: true,
    default: "text",
    type: String,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};

const allRules = computed(() => {
  let default_rules = [
    (val) => {
      if (!val) {
        return "This field is required";
      } else {
        return true;
      }
    },
  ];

  return [...props.rules, ...default_rules];
});

const showPass = ref(false);

const clearValue = (e) => {
  emits("update:modelValue", null);
};
</script>

<style lang="scss" scoped></style>
