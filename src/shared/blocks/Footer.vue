<template>
  <div :class="$style.root">i am footer</div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" module>
.root {
  background-color: var(--color-github-brand);
  width: 100%;
  height: 100%;
}
</style>
