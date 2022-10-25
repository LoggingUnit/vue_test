<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PageFooterLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-github-brand);
  width: 100%;
  height: 100%;
}
</style>
