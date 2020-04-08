import MiProgress from './src/progress';

/* istanbul ignore next */
MiProgress.install = function(Vue) {
  Vue.component(MiProgress.name, MiProgress);
};

export default MiProgress;
