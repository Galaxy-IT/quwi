<template>
  <div class="auth-wrap">
    <div class="auth-container">
      <h1 class="auth-title">
        LOGIN
      </h1>
      <form class="auth" @submit.prevent="onSubmit">
        <div class="auth__item">
          <input
            type="email"
            name="email"
            class="auth__input"
            placeholder="Email"
            v-model.trim="login"
            :class="{invalid: ($v.login.$dirty && !$v.login.required) || ($v.login.$dirty && !$v.login.email)}"
          />
          <small
            v-if="$v.login.$dirty && !$v.login.required"
            class="invalid-message">
            Field is required
          </small>
          <small
            v-else-if="$v.login.$dirty && !$v.login.email"
            class="invalid-message">
            Enter correct email
          </small>
        </div>
        <div class="auth__item">
          <input
            type="password"
            name="password"
            class="auth__input"
            placeholder="Password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          />
          <small
            v-if="$v.password.$dirty && !$v.password.required"
            class="invalid-message">
            Field is required
          </small>
        </div>
        <div class="auth__item flex">
          <button type="submit" name="login-btn" class="auth__btn">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  middleware: ['isAuthed'],
  layout: "default",
  data() {
    return {
      login: "",
      password: ""
    };
  },

  methods: {
    async onSubmit() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        const formData = {
          email: this.login,
          password: this.password
        };
        await this.$store.dispatch("authentication/login", formData);
      } catch (e) {
        console.log(e);
      }
    }
  },

  mounted() {
    const {message} = this.$route.query
    switch (message) {
      case 'login':
        this.$toast.show('Please login')
        break
      case 'logout':
        this.$toast.show('You logged out')
        break
    }
  },

  validations: {
    login: {
      required,
      email: email,
    },
    password: {
      required,
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
