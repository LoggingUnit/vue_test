<template>
  <div :class="$style.root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UsersListContentLayout",
};
</script>

<style lang="scss" module>
.root {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 140px);
  justify-content: space-between;
  column-gap: 97px;
  row-gap: 60px;
}
</style>
