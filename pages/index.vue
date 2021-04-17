<template>
 <div class="wrapper">
   <div class="main">
     <pageHeader />
     <projectList />
   </div>
 </div>
</template>

<script>
import pageHeader from "~/components/header/pageHeader";
import projectList from "~/components/projects/project-list";
export default {
  middleware: ['login-auth'],
  layout: "default",
  components: {
    pageHeader,
    projectList
  },
  head: {
    title: `Main page`
  },

  mounted() {
    if(this.$toast) {
      this.$toast.clear()
    }
  }
}
</script>
