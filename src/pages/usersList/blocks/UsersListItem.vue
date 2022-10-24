<template>
  <UsersListItemLayout>
    <template #avatar>
      <AvatarCircle :src="user.avatar_url" />
    </template>
    <template #username>
      <UsersListItemUsername :user="user" />
    </template>
    <template #link>
      <UsersListItemLink :user="user" />
    </template>
  </UsersListItemLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import UsersListItemLayout from "../components/UsersListItemLayout.vue";
import type { IUser } from "@/models/IUser";
import AvatarCircle from "@/shared/components/AvatarCircle.vue";
import UsersListItemLink from "@/pages/usersList/blocks/UsersListItemLink.vue";
import UsersListItemUsername from "@/pages/usersList/blocks/UsersListItemUsername.vue";

export default defineComponent({
  props: {
    user: Object as PropType<IUser>,
  },

  name: "UsersListItem",

  components: {
    UsersListItemUsername,
    UsersListItemLayout,
    UsersListItemLink,
    AvatarCircle,
  },
});
</script>
