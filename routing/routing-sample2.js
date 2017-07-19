$(function(){
  var hoge = Vue.extend({template: '#hoge'});
  var fuga = Vue.extend({template: '#fuga'});
  var App = Vue.extend({});
  var router = new VueRouter();
  router.map({
    '/hoge': { component: hoge},
    '/fuga': { component: fuga}
  });
  router.start(App, '#app');
});