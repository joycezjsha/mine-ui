<template>
  <ul class="mi-select-group__wrap" v-show="visible">
    <li class="mi-select-group__title">{{ label }}</li>
    <li>
      <ul class="mi-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from '@/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'MiOptionGroup',

    componentName: 'MiOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('MiOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
