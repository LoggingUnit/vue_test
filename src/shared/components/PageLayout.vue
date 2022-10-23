<template>
  <div :class="$style.root">
    <header :class="$style.header">
      <slot name="header" />
    </header>
    <main :class="$style.main">
      <slot name="main" />
    </main>
    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
};
</script>

<style lang="scss" module>
.root {
  .header,
  .footer {
    width: 100%;
  }

  .header {
    height: var(--sizes-header-height);
  }

  .main {
    width: 100%;
    min-height: calc(
      100vh - var(--sizes-header-height) - var(--sizes-footer-height)
    );
  }

  .footer {
    height: var(--sizes-footer-height);
  }
}
</style>
