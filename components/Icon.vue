<template>
  <component @click="$emit('click')" ref="svg" :class="['icon', name, props]" :is="icon"/>
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
    cursor: pointer;
    width: 20px;
    height: 20px;
    stroke: var(--white);
    fill: var(--white);
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

      &.arrow.arrow {
        stroke: var(--white);
        fill: var(--white);
        width: 15px;
        height: 13px;
      }
    }

    &.x-icon {
      cursor: pointer;
      width: 12px;
      height: 12px;
    }

    &.fill-gray {
      fill: var(--icon-gray);
      stroke: var(--icon-gray);
    }

  }

  a:hover > .icon.icon, a:focus > .icon.icon,
  .icon.icon:hover, .icon.icon:focus {
    stroke: var(--dark-blue);
    fill: var(--dark-blue);
  }

  a:active > .icon.icon, .icon.icon:active,
  a.active > .icon.icon, .icon.icon.active {

    stroke: var(--light-blue);
    fill: var(--light-blue);
  }

</style>
