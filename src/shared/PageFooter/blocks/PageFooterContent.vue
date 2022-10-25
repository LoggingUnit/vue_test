<template>
  <PageFooterContentLayout>
    <LinkWithIcon icon-src="/git-icon.svg" href="https://www.github.com" />
    <TextXS>© All rights reserved, 2022</TextXS>
  </PageFooterContentLayout>
</template>

<script>
import PageFooterContentLayout from "../components/PageFooterContentLayout.vue";
import LinkWithIcon from "../../components/LinkWithIcon.vue";
import TextXS from "@/shared/components/TextXS.vue";

export default {
  name: "PageFooterContent",

  components: {
    TextXS,
    LinkWithIcon,
    PageFooterContentLayout,
  },
};
</script>
