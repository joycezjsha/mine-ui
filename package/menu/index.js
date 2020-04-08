import MiMenu from './src/menu';

/* istanbul ignore next */
MiMenu.install = function(Vue) {
  Vue.component(MiMenu.name, MiMenu);
};

export default MiMenu;
