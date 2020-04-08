<template>
  <mi-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="mi-popconfirm">
    <p class="mi-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="mi-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="mi-popconfirm__action">
      <mi-button
        size="mini"
        :type="cancelButtonType"
        @click="cancel"
      >
        {{cancelButtonText}}
      </mi-button>
      <mi-button
        size="mini"
        :type="confirmButtonType"
        @click="confirm"
      >
        {{confirmButtonText}}
      </mi-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</mi-popover>
</template>

<script>
import ElPopover from 'mine-ui/popover';
import ElButton from 'mine-ui/button';
import {t} from '@/locale';

export default {
  name: 'ElPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t('el.popconfirm.confirmButtonText')
    },
    cancelButtonText: {
      type: String,
      default: t('el.popconfirm.cancelButtonText')
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'mi-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElPopover,
    ElButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
</script>
