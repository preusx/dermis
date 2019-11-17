import './index.sass';
import ContentExample from './theme/components/ContentExample';

export default ({ Vue }) => {
  window.Vue = Vue;
  Vue.component(ContentExample.name, ContentExample);
};
