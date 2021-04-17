<template>
  <div class="projects__wrap">
    <div class="container">
      <div class="no-info" v-if="!projects">
          No Data
      </div>
      <div class="projects" v-else>
        <div class="projects__item"
          v-for="(project, index) in projects"
          :key="index"
          @click="openProject(project.id)"
        >
          <div class="project__col">
            <div class="project__icon-wrap">
              <div
                class="project__icon"
              >
                <img
                  v-if="project.logo_url"
                  :src="project.logo_url"
                  alt=""
                >
              </div>
              <div class="project__name">
                {{ project.name }}
              </div>
            </div>
          </div>
          <div class="project__col">
            <div
              class="project__status"
              :class="{'active': project.is_active }"
            >
              {{ project.is_active === 1 ? 'Active' : 'Inactive' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  export default {
    name: 'projectList',

    computed: {
      ...mapGetters("projects",["projects"]),
    },

    methods: {
      openProject(id) {
        this.$router.push(`/project/${id}`)
      }
    },

    async created() {
      await this.$store.dispatch('projects/getProjects')
    }
  }
</script>

<style lang="scss" scoped>
  .no-info {
    text-align: center;
    font-weight: 500;
    margin-top: 2rem;
  }
</style>
