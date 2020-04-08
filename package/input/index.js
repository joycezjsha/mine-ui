import MiInput from './src/input';

/* istanbul ignore next */
MiInput.install = function(Vue) {
  Vue.component(MiInput.name, ElInput);
};

export default MiInput;
