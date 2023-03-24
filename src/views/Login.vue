<template>
  <div class="page">
    <h4>Đăng nhập</h4>
    <LogInForm :login="login" @submit:login="submitLogIn" />
    <p>{{ message }}</p>
    <router-link to="/register"><i class="fas fa-user-tag mt-2"></i> Đăng ký</router-link>
    <!-- <button class="btn btn-sm btn-success" @click="goToRegister()">
      <i class="fas fa-user-tag"></i> Đăng ký
    </button> -->
  </div>
</template>
  
<script>
import UserService from "@/services/user.service";
import LogInForm from "@/components/LogInForm.vue";
import { useAccountStore } from "@/stores/AccountStore";

export default {
  components: {
    LogInForm,
  },
  data() {
    const userStore = useAccountStore();
    return {
      message: "",
      userStore,
      login: {}
    };
  },
  methods: {
    async submitLogIn(data) {
      try {
        this.login = await UserService.login(data);
        this.userStore.user = this.login;
        this.userStore.isLogin = true;
        this.$router.push({ name: 'contactbook' });
      } catch (error) {
        console.log(error);
        this.message = "Sai email hoặc mật khẩu. Vui lòng thử lại.";
      }
    },
    // goToRegister() {
    //   this.$router.push({ name: "register" });
    // },
  },
};
</script>