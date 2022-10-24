<template>
  <img :class="$style.root" :src="src" alt="" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: String,
  },

  name: "AvatarCircle",
});
</script>

<style lang="scss" module>
.root {
  border-radius: 50%;
  width: 100%;
}
</style>
