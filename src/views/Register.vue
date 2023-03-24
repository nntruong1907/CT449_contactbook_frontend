<template>
    <div class="page">
        <h4>Đăng ký</h4>
        <RegisterForm :user="user" @submit:user="submitRegister" />
        <p>{{ message }}</p>
        <router-link to="/login"><i class="fas fa-sign-in mt-2"></i> Đăng nhập</router-link>

        <!-- <button class="btn btn-sm btn-primary" @click="goToLogin()">
            <i class="fas fa-sign-in"></i> Đăng nhập
        </button> -->
    </div>
</template>
    
<script>
import UserService from "@/services/user.service";
import RegisterForm from "@/components/RegisterForm.vue";

export default {
    components: {
        RegisterForm,
    },
    data() {
        return {
            message: "",
            user: {}
        };
    },
    methods: {
        async submitRegister(data) {
            try {
                await UserService.register(data);
                this.message = "Đăng ký thành công.";
                this.$router.push({ name: 'login' });
            } catch (error) {
                console.log(error);
            }
        },
        // goToLogin() {
        //     this.$router.push({ name: 'login' });
        // },
    },
};
</script>