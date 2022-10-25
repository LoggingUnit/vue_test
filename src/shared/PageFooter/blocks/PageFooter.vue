<template>
  <PageFooterLayout>
    <PageFooterContent />
  </PageFooterLayout>
</template>

<script>
import PageFooterLayout from "@/shared/PageFooter/components/PageFooterLayout.vue";
import PageFooterContent from "@/shared/PageFooter/blocks/PageFooterContent.vue";

export default {
  name: "PageFooter",

  components: {
    PageFooterContent,
    PageFooterLayout,
  },
};
</script>
