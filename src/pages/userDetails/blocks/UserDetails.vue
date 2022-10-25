<template>
  <UserDetailsLayout>
    <template #avatar>
      <span>i am avatar</span>
    </template>
    <template #username>
      <span>i am username</span>
    </template>
    <template #repos>
      <span>i am repos</span>
    </template>
  </UserDetailsLayout>
</template>

<script lang="ts">
import UserDetailsLayout from "@/pages/userDetails/components/UserDetailsLayout.vue";

export default {
  name: "UserDetails",

  components: {
    UserDetailsLayout,
  },
};
</script>
