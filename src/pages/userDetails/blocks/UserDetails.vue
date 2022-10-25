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
import { mapActions } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserDetails",

  components: {
    UserDetailsLayout,
  },

  methods: {
    ...mapActions("userDetailsModule", ["getUserDetails"]),
  },

  mounted() {
    const username = this.$route.params.login;
    this.getUserDetails(username);
  },
});
</script>
