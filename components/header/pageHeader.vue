<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <div class="logo">
            <nuxt-link to="/">Q</nuxt-link>
          </div>
        </div>
        <div class="header__right">
          <div class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <nuxt-link to="/">Projects</nuxt-link>
              </li>
              <li class="nav__item">
                <button
                  type="button"
                  @click="logout"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default  {
    name: 'pageHeader',

    methods: {
      async logout() {
        try {
          await this.$store.dispatch("authentication/logout");
          this.$router.push("/login?message=logout");
        } catch (e) {
          console.log(e);
        }
      },
    }
  }
</script>
