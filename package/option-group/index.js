import MiOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
MiOptionGroup.install = function(Vue) {
  Vue.component(MiOptionGroup.name, MiOptionGroup);
};

export default MiOptionGroup;
