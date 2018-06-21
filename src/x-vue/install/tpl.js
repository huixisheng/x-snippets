import App from './App';

const install = function (Vue) {
  if (install.installed) {
    return;
  }
  // https://github.com/search?q=install.installed+vue&type=Code
  // install.installed = true;
  // components.map(component => {
  //   Vue.component(component.name, component);
  // });
  // Vue.directive('app', App);
  // Vue.prototype.$app = App;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  App,
};