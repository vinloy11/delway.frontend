<template>
  <component ref="svg" :class="['icon', name, props]" :is="icon"/>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      props: {
        type: String,
        required: false
      }
    },

    methods: {
      icon() {
        return import(`@/assets/images/icons/${this.name}.svg`)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .icon {
    width: 20px;
    height: 20px;
    stroke: var(--white);
    stroke-width: 1.5px;

    &.right {
      margin-left: 8px;
    }

    &.left {
      margin-right: 8px;
    }

    &.icon__header {
      stroke: var(--black);

      &.plus {
        width: 8px;
        height: 8px;
        stroke-width: 0.8px;
        fill: var(--black);
      }

      &.arrow {
        stroke: var(--white);
        width: 15px;
        height: 13px;
      }
    }
  }
</style>
