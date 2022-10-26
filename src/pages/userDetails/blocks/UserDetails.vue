<template>
  <UserDetailsLayout>
    <template #backButton>
      <LinkWithIcon icon-src="/back-icon.svg" href="/" />
    </template>
    <template #avatar>
      <AvatarCircle :src="userDetails.avatar_url" />
    </template>
    <template #username>
      <TextL>{{ userDetails.login }}</TextL>
    </template>
    <template #repos v-if="isReposVisible">
      <UserDetailsRepos />
    </template>
  </UserDetailsLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import UserDetailsLayout from "@/pages/userDetails/components/UserDetailsLayout.vue";
import AvatarCircle from "@/shared/components/AvatarCircle.vue";
import TextL from "@/shared/components/TextL.vue";
import UserDetailsRepos from "@/pages/userDetails/blocks/UserDetailsRepos.vue";
import LinkWithIcon from "@/shared/components/LinkWithIcon.vue";

export default defineComponent({
  name: "UserDetails",

  components: {
    LinkWithIcon,
    TextL,
    AvatarCircle,
    UserDetailsLayout,
    UserDetailsRepos,
  },

  methods: {
    ...mapActions("userDetailsModule", ["getUserDetails", "getUserRepos"]),
  },

  computed: {
    ...mapGetters("userDetailsModule", ["userDetails", "userRepos"]),

    isReposVisible() {
      return this.userRepos?.length;
    },
  },

  mounted() {
    const username = this.$route.params.login;
    this.getUserDetails(username);
    this.getUserRepos(username);
  },
});
</script>
