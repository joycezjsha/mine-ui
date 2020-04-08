import MiMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
MiMenuItem.install = function(Vue) {
  Vue.component(MiMenuItem.name, MiMenuItem);
};

export default MiMenuItem;
