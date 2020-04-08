<template>
  <transition-group
    tag="ul"
    :class="[
      'mi-upload-list',
      'mi-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="mi-list"
  >
    <li
      v-for="file in files"
      :class="['mi-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="mi-upload-list__item-thumbnail"
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          :src="file.url" alt=""
        >
        <a class="mi-upload-list__item-name" @click="handleClick(file)">
          <i class="mi-icon-document"></i>{{file.name}}
        </a>
        <label class="mi-upload-list__item-status-label">
          <i :class="{
            'mi-icon-upload-success': true,
            'mi-icon-circle-check': listType === 'text',
            'mi-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i class="mi-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
        <i class="mi-icon-close-tip" v-if="!disabled">{{ t('el.upload.deleteTip') }}</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <mi-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)">
        </mi-progress>
        <span class="mi-upload-list__item-actions" v-if="listType === 'picture-card'">
          <span
            class="mi-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="mi-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="mi-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="mi-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
  import Locale from '@/mixins/locale';
  import ElProgress from 'mine-ui/progress';

  export default {

    name: 'MiUploadList',

    mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: { ElProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>
