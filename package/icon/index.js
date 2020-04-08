import MiIcon from './src/icon.vue';

/* istanbul ignore next */
MiIcon.install = function(Vue) {
  Vue.component(MiIcon.name, MiIcon);
};

export default MiIcon;
