import MiTable from './src/table';

/* istanbul ignore next */
MiTable.install = function(Vue) {
  Vue.component(MiTable.name, MiTable);
};

export default ElTable;
