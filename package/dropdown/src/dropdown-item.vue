<template>
  <li
    class="mi-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'mi-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'MiDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('MiDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
