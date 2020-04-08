import MiDialog from './src/component';

/* istanbul ignore next */
MiDialog.install = function(Vue) {
  Vue.component(MiDialog.name, MiDialog);
};

export default MiDialog;
