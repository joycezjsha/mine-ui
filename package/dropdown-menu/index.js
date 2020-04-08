import MiDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
MiDropdownMenu.install = function(Vue) {
  Vue.component(MiDropdownMenu.name, MiDropdownMenu);
};

export default MiDropdownMenu;
