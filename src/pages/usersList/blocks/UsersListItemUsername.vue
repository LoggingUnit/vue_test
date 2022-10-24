<template>
  <UsersListItemUsernameLayout>
    <RouterLink :to="to">
      <TextM>{{ user.login }}</TextM>
    </RouterLink>
  </UsersListItemUsernameLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IUser } from "@/models/IUser";
import { RouterLink } from "vue-router";
import TextM from "@/shared/components/TextM.vue";
import UsersListItemUsernameLayout from "@/pages/usersList/components/UsersListItemUsernameLayout.vue";

export default defineComponent({
  props: {
    user: Object as PropType<IUser>,
  },

  name: "UsersListItemUsername",

  components: {
    UsersListItemUsernameLayout,
    TextM,
    RouterLink,
  },

  computed: {
    to() {
      return `/${this.user?.login}`;
    },
  },
});
</script>
