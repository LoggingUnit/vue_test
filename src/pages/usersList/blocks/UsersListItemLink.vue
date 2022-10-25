<template>
  <LinkWithIcon icon-src="/link-icon.svg" :href="user.html_url">
    <TextS>github</TextS>
  </LinkWithIcon>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IUserOverview } from "@/models/IUserOverview";
import LinkWithIcon from "@/shared/components/LinkWithIcon.vue";
import TextS from "@/shared/components/TextS.vue";

export default defineComponent({
  props: {
    user: Object as PropType<IUserOverview>,
  },

  name: "UsersListItemLink",

  components: {
    TextS,
    LinkWithIcon,
  },
});
</script>
