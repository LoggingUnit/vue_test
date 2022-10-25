<template>
  <PageHeaderTitleLayout>
    <LinkWithIcon icon-src="/git-icon.svg" href="/">
      <TextM>Github Userboard</TextM>
    </LinkWithIcon>
  </PageHeaderTitleLayout>
</template>

<script>
import PageHeaderTitleLayout from "@/shared/PageHeader/components/PageHeaderTitleLayout.vue";
import LinkWithIcon from "@/shared/components/LinkWithIcon.vue";
import TextM from "@/shared/components/TextM.vue";

export default {
  name: "PageHeaderTitle",

  components: {
    TextM,
    LinkWithIcon,
    PageHeaderTitleLayout,
  },
};
</script>
