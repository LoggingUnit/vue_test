<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PageFooterContentLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--color-white);
    padding-top: 20px;
  }
}
</style>
