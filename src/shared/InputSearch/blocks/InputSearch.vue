<template>
  <InputSearchLayout>
    <input v-bind="$attrs" @input="onInput" />
  </InputSearchLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputSearchLayout from "../components/InputSearchLayout.vue";

export default defineComponent({
  emits: {
    input: (text: string) => true,
  },

  name: "InputSearch",

  components: {
    InputSearchLayout,
  },

  methods: {
    onInput(e: InputEvent) {
      this.$emit("input", (e.target as HTMLInputElement).value);
    },
  },
});
</script>
