import MiOption from '../select/src/option';

/* istanbul ignore next */
MiOption.install = function(Vue) {
  Vue.component(MiOption.name, MiOption);
};

export default MiOption;
