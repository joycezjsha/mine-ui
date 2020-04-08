import MiTabs from './src/tabs';

/* istanbul ignore next */
MiTabs.install = function(Vue) {
  Vue.component(MiTabs.name, MiTabs);
};

export default MiTabs;
