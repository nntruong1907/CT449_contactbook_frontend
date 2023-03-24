<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-adress-book"></i>
                </router-link>
            </li>
        </div>

        <div class="navbar-nav" v-if="this.userStore.isLogin">
            <li class="nav-item">
                <button @click="signOut" class="nav-link btn btn-link">
                    Đăng xuất
                    <i class="fas fa-sign-out"></i>
                </button>
            </li>
        </div>

    </nav>
</template>

<script>
import { useAccountStore } from "@/stores/AccountStore"

export default {
    data() {
        const userStore = useAccountStore();
        return {
            userStore,
        };
    },
    methods: {
        async signOut() {
            this.userStore.user = {};
            this.userStore.isLogin = false;
            this.$router.push({ name: "login" });
        },
        // async logIn() {
        //     // this.userStore.user = {};
        //     this.$router.push({ name: "login" });
        // },
        // async register() {
        //     // this.userStore.user = {};
        //     this.$router.push({ name: "register" });
        // },
    },
};
</script>