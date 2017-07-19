const User = {
  template: '<div>User is {{ $route.params.id }}</div>'
};

const router = new VueRouter({
  routes: [
    {path: '/user/:id', component: User}
  ]
});

const app = new Vue({router}).$mount('#app');