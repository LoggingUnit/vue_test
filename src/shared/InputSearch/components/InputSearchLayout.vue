<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script>
export default {
  name: "InputSearchLayout",
};
</script>

<style lang="scss" module>
.root {
  input {
    padding-left: 36px;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 12px;
    background: var(--color-white) url(public/search-icon.svg) no-repeat 12px
      8px;
  }
}
</style>
