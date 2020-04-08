import MiTableColumn from '../table/src/table-column';

/* istanbul ignore next */
MiTableColumn.install = function(Vue) {
  Vue.component(MiTableColumn.name, MiTableColumn);
};

export default MiTableColumn;
