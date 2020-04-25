<template>
  <section class="header grid" style="--cols: 12">
    <nuxt-link to="/" class="logo-wrapper item" style="--span: 2">
      <Logo class="logo"/>
      <span class="name">DELWAY</span></nuxt-link>
    <template v-if="isAuth">
      <section class="item" style="--span: 6"></section>
      <section class="item" style="--span: 4">
        <nuxt-link to="/" class="btn default"><span>Создать проект </span><span class="plus">+</span></nuxt-link>
        Войти, Зарегестрироваться
      </section>
    </template>
    <template v-else>
      <section class="item" style="--span: 4"></section>
      <section class="item" style="--span: 2">
        <nuxt-link to="/" class="btn default create-project__not-auth">Создать проект
          <Icon name="plus" props="right icon__header"/>
        </nuxt-link>
      </section>
      <section class="item authorization" style="--span: 4">
        <a href="" @click.prevent="openForm('Authorization')" class="btn sign-in default">
          <Icon name="user" props="left icon__header"/>
          Войти</a>
        <a href="" @click.prevent="openForm('Registration')" class="btn sign-out success">Зарегестрироваться
          <Icon name="arrow" props="right icon__header"/>
        </a>
      </section>
    </template>
    <component v-if="showModal" @close="showModal = false" :is="modalForm"></component>
  </section>
</template>

<script>
  import Logo from '~/assets/images/logo.svg';
  import Icon from "./Icon";
  import Registration from "./modalAuth/Registration";
  import PasswordRecovery from "./modalAuth/PasswordRecovery";
  import Authorization from "./modalAuth/Authorization";

  export default {
    components: {
      Icon,
      Logo,
      Registration,
      PasswordRecovery,
      Authorization
    },

    data() {
      return {
        isAuth: false,
        modalForm: 'Registration',
        showModal: false
      }
    },

    computed: {},

    methods: {
      openForm(name) {
        this.showModal = true
        return this.modalForm = name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background-color: var(--dark-blue);
    padding: 14px 16px;

    .logo-wrapper {
      display: flex;
      align-items: center;

      .logo {
        width: 36px;
        height: 36px;
        vertical-align: center;
      }

      .name {
        display: inline-block;
        margin-left: 13px;
        font-weight: bold;
        color: var(--white);
      }
    }

    .btn {
      font-size: 12px;
    }

    .create-project__not-auth {
      width: 100%;
      padding: 8px 0;

      .plus {
        display: inline-block;
        margin-left: 8px;
      }
    }

    .authorization {
      padding: 0 8px;
      box-sizing: border-box;
      display: flex;

      .sign-in {
        width: 35%;
        padding: 0;
      }

      .sign-out {
        width: 65%;
      }
    }

  }
</style>
