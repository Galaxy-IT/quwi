<template>
  <div class="project-item">
    <pageHeader />
    <div class="project-item__nav">
      <div class="container">
        <nuxt-link to="/">BACK</nuxt-link>
      </div>
    </div>
    <div class="container">
      <div class="project-info">
        <div class="project-info__col">
          <label for="name" class="project-info__elem">
            Name
          </label>
        </div>
        <div class="project-info__col form-col">
          <form class="form" @submit.prevent="onSubmit">
            <div class="form__item">
              <input
                type="text"
                name="name"
                class="form__input"
                placeholder="Project name"
                id="name"
                v-model.trim="currentProject.name"
                @input="error = false"
              />
              <small
                v-if="error"
                class="invalid-message">
                Field is required
              </small>
            </div>
            <div class="form__item">
              <button type="submit" name="btn" class="form__btn">
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "~/components/header/pageHeader"
  export default {
    name: 'project',
    middleware: ['login-auth'],
    layout: "default",
    components: {
      pageHeader
    },
    head: {
      title: `Project page`
    },

    data() {
      return {
        currentProject: {},
        error: false,
      }
    },

    async created() {
      this.currentProject = await this.$store.dispatch('projects/fetchProjectById', this.$nuxt.$route.params.id)
    },

    methods: {
      async onSubmit() {
        if(!this.currentProject.name) {
          this.error = true
          return
        }
        const formData = {
          name: this.currentProject.name
        }
        try {
          await this.$store.dispatch('projects/updateProject', {
            id: this.currentProject.id,
            data: formData
          })
          this.$router.push("/")
        } catch (e) {
          console.log(e);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 2px solid rgba(0,0,0,.3);
  }
  .form__item {
    position: relative;
    .invalid-message {
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
</style>

