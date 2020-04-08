import MiCollapse from './src/collapse';

/* istanbul ignore next */
MiCollapse.install = function(Vue) {
  Vue.component(MiCollapse.name, MiCollapse);
};

export default MiCollapse;

