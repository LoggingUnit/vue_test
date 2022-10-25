<template>
  <PageHeaderLayout>
    <template #title>
      <PageHeaderTitle />
    </template>
    <template #search>
      <PageHeaderSearch />
    </template>
  </PageHeaderLayout>
</template>

<script>
import PageHeaderLayout from "@/shared/PageHeader/components/PageHeaderLayout.vue";
import PageHeaderTitle from "@/shared/PageHeader/blocks/PageHeaderTitle.vue";
import PageHeaderSearch from "@/shared/PageHeader/blocks/PageHeaderSearch.vue";

export default {
  name: "PageHeader",

  components: {
    PageHeaderSearch,
    PageHeaderTitle,
    PageHeaderLayout,
  },
};
</script>
