<template>
  <div :class="$style.root">
    <div :class="$style.avatar">
      <slot name="avatar" />
    </div>
    <h2 :class="$style.username">
      <slot name="username" />
    </h2>
    <div :class="$style.link">
      <slot name="link" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersListItemLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  width: 140px;
  text-align: center;

  .avatar {
    width: 100%;
    height: 140px;
    padding-bottom: 12px;
  }

  .username {
    padding-bottom: 8px;
    text-transform: capitalize;
  }

  .link {
    margin: 0 auto;
  }
}
</style>
