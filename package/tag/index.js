import MiTag from './src/tag';

/* istanbul ignore next */
MiTag.install = function(Vue) {
  Vue.component(MiTag.name, MiTag);
};

export default MiTag;
