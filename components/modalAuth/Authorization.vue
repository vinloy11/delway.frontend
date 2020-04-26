<template>
  <ModalWrapper @close="$emit('close')">
    <h1 class="title" slot="header">Авторизация </h1>
    <p slot="body">БОди епта</p>
    <!--    <p slot="footer">Footer епта</p>-->
  </ModalWrapper>
</template>

<script>
  import ModalWrapper from "@/components/ModalWrapper";
  export default {
    components: {
      ModalWrapper
    },
  }
</script>

<style scoped lang="scss" src="../../assets/styles/authModal.scss" />
