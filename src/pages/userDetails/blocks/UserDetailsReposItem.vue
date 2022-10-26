<template>
  <UserDetailsReposItemLayout>
    <template #name>
      <LinkWithIcon :href="reposItem.html_url">
        <TextM>{{ reposItem.name }}</TextM>
      </LinkWithIcon>
    </template>
    <template #watch>
      <LabelWithIcon icon-src="/watch-icon.svg">
        <TextM>{{ reposItem.watchers }}</TextM>
      </LabelWithIcon>
    </template>
    <template #stars>
      <LabelWithIcon icon-src="/star-icon.svg">
        <TextM>{{ reposItem.stargazers_count }}</TextM>
      </LabelWithIcon>
    </template>
  </UserDetailsReposItemLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IUserRepo } from "@/models/IUserRepo";
import UserDetailsReposItemLayout from "@/pages/userDetails/components/UserDetailsReposItemLayout.vue";
import LinkWithIcon from "@/shared/components/LinkWithIcon.vue";
import TextM from "@/shared/components/TextM.vue";
import LabelWithIcon from "@/shared/components/LabelWithIcon.vue";

export default defineComponent({
  props: {
    reposItem: Object as PropType<IUserRepo>,
  },

  name: "UserDetailsReposItem",

  components: {
    LabelWithIcon,
    TextM,
    LinkWithIcon,
    UserDetailsReposItemLayout,
  },
});
</script>
