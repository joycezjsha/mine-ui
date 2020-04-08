import MiSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
MiSubmenu.install = function(Vue) {
  Vue.component(MiSubmenu.name, MiSubmenu);
};

export default MiSubmenu;
