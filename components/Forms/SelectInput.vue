<template>
  <v-autocomplete
    class="custom_input select"
    @update:modelValue="updateValue"
    :model-value="modelValue"
    :loading="loading"
    :deletable-chips="true"
    :items="isStatic ? staticItems : items"
    :disabled="disabled"
    :rules="allRules"
    :clearable="clearable"
    :return-object="returnObject"
    item-title="name"
    item-value="id"
  >
  </v-autocomplete>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  disabled: {
    required: false,
    default: false,
    type: Boolean,
  },
  returnObject: {
    required: false,
    default: true,
    type: Boolean,
  },
  staticItems: {
    required: false,
    type: Array,
    default: () => [],
  },
  getUrl: {
    required: false,
    type: String,
  },
  modelValue: {
    required: true,
  },
  _sync: {
    required: false,
    type: Object,
    default: () => {},
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
});

const loading = ref(false);

const isStatic = computed(() => {
  return props.staticItems.length > 0;
});

const items = ref([]);
const staticItems = computed(() => {
  return props.staticItems;
});

const _sync = computed(() => {
  return props._sync;
});
watch(_sync, (newVal) => {
  getSelectItems();
  emits("update:modelValue", null);
  items.value = [];
});

const disabled = computed(() => {
  return props.disabled || loading.value || props._sync === null;
});

const getSelectItems = () => {
  if (isStatic.value || disabled.value) {
    return;
  }

  loading.value = true;
  nuxtApp
    .$axios({
      method: "GET",
      url: `${props.getUrl}`,
    })
    .then((res) => {
      items.value = res.data.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });
    })
    .catch((err) => {
      console.log(err);
      items.value = [
        { id: 1, name: "Item Default 1" },
        { id: 2, name: "Item Default 2" },
      ];
    })
    .finally(() => {
      loading.value = false;
    });
};
getSelectItems();

const allRules = computed(() => {
  let default_rules = [
    (val) => {
      if (props.multiple) {
        return val.length > 0 || "This field is required";
      } else {
        return !!val || "This field is required";
      }
    },
  ];

  return [...props.rules, ...default_rules];
});

const updateValue = (e) => {
  emits("update:modelValue", e);
};
</script>
