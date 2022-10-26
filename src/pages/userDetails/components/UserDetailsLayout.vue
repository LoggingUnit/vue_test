<template>
  <div :class="$style.root">
    <div :class="$style.backButton">
      <slot name="backButton" />
    </div>
    <div :class="$style.avatar">
      <slot name="avatar" />
    </div>
    <div :class="$style.username">
      <slot name="username" />
    </div>
    <div :class="$style.repos">
      <slot name="repos" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetailsLayout",
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 70px 48px;

  .avatar,
  .username,
  .repos {
    display: flex;
  }

  .avatar,
  .username {
    padding-bottom: 36px;
  }

  .avatar {
    width: 300px;
  }

  .username {
    text-transform: capitalize;
  }

  .repos {
    width: 70%;
  }

  .backButton {
    position: absolute;
    left: 50px;
    top: 70px;
  }
}
</style>
