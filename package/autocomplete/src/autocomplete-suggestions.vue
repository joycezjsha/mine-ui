<template>
  <transition name="mi-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="mi-autocomplete-suggestion el-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <mi-scrollbar
        tag="ul"
        wrap-class="mi-autocomplete-suggestion__wrap"
        view-class="mi-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="mi-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </mi-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from '@/utils/vue-popper';
  import Emitter from '@/mixins/emitter';
  import MiScrollbar from '../../scrollbar';

  export default {
    components: { MiScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'ElAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('ElAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.mi-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
