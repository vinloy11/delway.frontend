<template>
  <div class="modal-mask">
    <div @click="closeModal" class="modal-wrapper">
      <div class="modal-container">
        <Icon @click="$emit('close')" name="x-icon" props="fill-gray"/>
        <div class="modal-header">
          <slot name="header">

          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
<!--            default footer-->
<!--            <button class="modal-default-button" @click="$emit('close')">-->
<!--              OK-->
<!--            </button>-->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "./Icon";
  export default {
    components: {
      Icon
    },

    data() {
      return {
        showModal: false
      }
    },

    beforeMount() {
      if (process.client) {
        document.documentElement.addEventListener('keyup', this.closeModal);
      }
    },

    beforeDestroy() {
      if (process.client) {
        document.documentElement.removeEventListener('keyup', this.closeModal);
      }
    },

    methods: {
      closeModal(e) {
        if (e.type === 'click') {
          if (!e.target.classList.contains('modal-wrapper')) return;
        } else if (e.type === 'keyup') {
          if (e.key !== 'Escape') return;
        }
        this.$emit('close');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    padding: 16px;
    background-color: #fff;
    border-radius: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    overflow: hidden;

    @media (max-width: 640px) {
      width: 80%;
    }
  }

  .modal-header h3 {
    /*margin-top: 0;*/
  }

  .modal-body {
    /*margin: 20px 0;*/
  }

  /*.modal-default-button {*/
  /*  float: right;*/
  /*}*/

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .x-icon {
    position: absolute;
    right: 16px;
    top: 16px;
  }

</style>
