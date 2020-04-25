<template>
  <ModalWrapper @close="$emit('close')">
    <h3 slot="header">Регистрация</h3>
    <p slot="body">БОди епта ДЛИННЫЙ ТЕЕЕЕКТСССССССССССССССССС</p>
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
