<template>
    <Form @submit="submitRegister" :validation-schema="userFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" type="text" class="form-control" v-model="userLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="name">Email</label>
            <Field name="email" type="text" class="form-control" v-model="userLocal.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="name">Địa chỉ</label>
            <Field name="address" type="text" class="form-control" v-model="userLocal.address" />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Số điện thoại</label>
            <Field name="phone" type="tel" class="form-control" v-model="userLocal.phone" />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="username">Tên tài khoản</label>
            <Field name="username" type="text" class="form-control" v-model="userLocal.username" />
            <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group row">
            <div class="col-6">
                <label for="password">Mật khẩu</label>
                <Field name="password" type="password" class="form-control" v-model="userLocal.password"
                    placeholder="Password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="col-6">
                <label for="repassword">Nhập lại mật khẩu</label>
                <Field name="repassword" type="password" class="form-control" rules="confirmed:@password"
                    placeholder="Re-Password" />
                <ErrorMessage name="repassword" class="error-feedback" />
            </div>
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">Đăng ký</button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form, Field, ErrorMessage,
    },
    emits: ["submit:user"],
    props: {
        user: { type: Object, required: true },
    },
    data() {
        const userFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên không được để trống.")
                .min(2, "Tên phải có ít nhất 2 ký tự.")
                .max(20, "Tên có nhiều nhất 20 ký tự."),
            username: yup
                .string()
                .required("Vui lòng nhập tên tài khoản")
                .min(8, "Tên tài khoản có ít nhất 8 ký tự.")
                .max(20, "Tên tài khoản có nhiều nhất 20 ký tự."),
            password: yup
                .string()
                .required("Vui lòng nhập mật khẩu")
                .min(5, "Mật khẩu có ít nhất 5 ký tự.")
                .max(25, "Mật khẩu có nhiều nhất 25 ký tự."),
            repassword: yup
                .string()
                .required("Mật khẩu xác nhận không được để trống.")
                .oneOf([yup.ref('password'), null], "Mật khẩu xác nhận không trùng khớp."),
            email: yup
                .string()
                .required("Vui lòng nhập email.")
                .email("E-mail không đúng định dạng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            address: yup
                .string()
                .max(100, "Địa chỉ có tối đa 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."),
        });
        return {
            userLocal: this.user,
            userFormSchema,
        };
    },
    methods: {
        submitRegister() {
            this.$emit("submit:user", this.userLocal);
        },
    },
}
</script>
  
<style scoped>
@import "@/assets/form.css";
</style>