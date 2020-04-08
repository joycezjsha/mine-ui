import MiTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
MiTimelineItem.install = function(Vue) {
  Vue.component(MiTimelineItem.name, MiTimelineItem);
};

export default MiTimelineItem;
