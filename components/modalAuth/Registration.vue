<template>
  <ModalWrapper @close="$emit('close')">
    <div slot="header">
      <Icon @click="additionally = !additionally" v-if="additionally" name="arrow" class="arrow"/>
      <h1 class="title">Регистрация</h1>
      <span class="additionally" v-if="additionally">Дополнительно</span>
      <div class="heading" v-html="additionally ? 'Личные данные' : 'Аккаунт'"></div>
    </div>
    <form @submit.prevent="submit" slot="body">
      <template v-if="!additionally">
        <div :class="['field', 'login', validClass('login')]">
          <label for="login">Логин</label>
          <input @input="removeSpaces" placeholder="Leemiant" id="login" type="text"
                 v-model.trim="$v.userData.login.$model">
          <span v-if="$v.userData.login.$error && !$v.userData.login.required">Поле не должно быть пустым</span>
        </div>
        <div :class="['field', 'email', validClass('email')]">
          <label for="email">E-mail</label>
          <input placeholder="zororomz@gmail.com" id="email" type="text" v-model.trim="$v.userData.email.$model">
          <span v-if="$v.userData.email.$error && !$v.userData.email.required">Поле не должно быть пустым</span>
          <span v-if="$v.userData.email.$error && !$v.userData.email.email">Введите корректный E-mail</span>
        </div>
        <div :class="['field', 'password', validClass('password')]">
          <label for="password">Пароль</label>
          <input placeholder="Ваш пароль" id="password" type="password" v-model="$v.userData.password.$model">
          <span v-if="$v.userData.password.$error && !$v.userData.password.required">Поле не должно быть пустым</span>
          <span v-if="$v.userData.password.$error && !$v.userData.password.minLength">Пароль должен быть длиннее {{$v.userData.password.$params.minLength.min}} символов</span>
        </div>
        <button @click.prevent="continueReg" class="btn success big">Продолжить регистрацию</button>
      </template>
      <template v-else>
        <div :class="['field', 'name', validClass('name')]">
          <label for="name">Имя</label>
          <input placeholder="Иван" id="name" type="text" v-model.trim="$v.userData.name.$model">
          <span v-if="$v.userData.name.$error && !$v.userData.name.required">Поле не должно быть пустым</span>
        </div>
        <div :class="['field', 'surname', validClass('surname')]">
          <label for="surname">Фамилия</label>
          <input placeholder="Иванов" id="surname" type="text" v-model.trim="$v.userData.surname.$model">
          <span v-if="$v.userData.surname.$error && !$v.userData.surname.required">Поле не должно быть пустым</span>
        </div>
        <div class="heading">Контакты</div>
        <div class="field country">
          <label for="country">Страна</label>
          <input placeholder="Россия" id="country" type="text" v-model="userData.country">
        </div>
        <div class="field city">
          <label for="city">Страна</label>
          <input placeholder="Новосибирск" id="city" type="text" v-model="userData.city">
        </div>
        <button class="btn big">Зарегестрироваться</button>
      </template>
    </form>
    <!--    <p slot="footer">Footer епта</p>-->
  </ModalWrapper>
</template>

<script>
  import {required, email, minLength} from 'vuelidate/lib/validators'
  import ModalWrapper from "@/components/ModalWrapper";
  import Icon from "../Icon";

  export default {
    components: {
      Icon,
      ModalWrapper
    },

    data() {
      return {
        additionally: false,
        userData: {
          login: "",
          email: "",
          password: "",
          name: "",
          surname: "",
          country: "",
          city: "",
        }
      }
    },

    validations: {
      userData: {
        login: {required},
        email: {required, email},
        password: {required, minLength: minLength(8)},
        confirmPassword: {required},
        name: {required},
        surname: {required},
      }
    },

    computed: {
      validation() {
        return {
          login: !!this.userData.login.replace(/\s+/g, '')
        }
      }
    },

    methods: {
      removeSpaces() {
        this.userData.login = this.userData.login.replace(/\s+/g, '');
      },

      continueReg() {
        this.$v.userData.login.$touch();
        this.$v.userData.email.$touch();
        this.$v.userData.password.$touch();
        if (this.$v.userData.login.$error
          || this.$v.userData.email.$error
          || this.$v.userData.password.$error) {
          console.log('sidi tutu')
        } else {
          this.additionally = !this.additionally
        }
      },

      submit() {
        this.$v.userData.$touch();
        if (!this.$v.userData.login.$error
          && !this.$v.userData.email.$error
          && !this.$v.userData.password.$error
          && !this.$v.userData.name.$error
          && !this.$v.userData.surname.$error) {
          console.log('submit')
        } else {
          console.log('ERROR')
        }
      },

      validClass(field) {
        if (this.$v.userData[field].$invalid && this.$v.userData[field].$error ) {
          return 'error'
        } else if(!this.$v.userData[field].$invalid && !this.$v.userData[field].$error) {
          return 'success'
        } else {
          return ''
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="../../assets/styles/authModal.scss"/>
