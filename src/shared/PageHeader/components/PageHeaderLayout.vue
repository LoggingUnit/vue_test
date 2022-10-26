<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <slot name="title" />
    </div>
    <div :class="$style.search">
      <slot name="search" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeaderLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: var(--color-github-brand);
  box-sizing: border-box;
  padding: 0 48px;

  .search {
    width: 232px;
    padding-right: 48px;
  }
}
</style>
