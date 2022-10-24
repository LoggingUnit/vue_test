<template>
  <LinkWithIcon icon-src="/link-icon.svg" :href="user.html_url">
    <TextS>github</TextS>
  </LinkWithIcon>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IUser } from "@/models/IUser";
import LinkWithIcon from "@/shared/components/LinkWithIcon.vue";
import TextS from "@/shared/components/TextS.vue";

export default defineComponent({
  props: {
    user: Object as PropType<IUser>,
  },

  name: "UsersListItemLink",

  components: {
    TextS,
    LinkWithIcon,
  },
});
</script>
