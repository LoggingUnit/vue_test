<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <slot name="title" />
    </div>
    <div :class="$style.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersListLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;

  .title {
    background-color: #181818;
  }

  .content {
    background-color: blue;
  }
}
</style>
