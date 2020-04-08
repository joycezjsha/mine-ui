<template>
  <div class="mi-page-header">
    <div class="mi-page-header__left" @click="$emit('back')">
      <i class="mi-icon-back"></i>
      <div class="mi-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="mi-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from '@/locale';
export default {
  name: 'MiPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('mi.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
