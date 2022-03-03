import { createWebHistory, createRouter } from "vue-router";
// import Home from "../views/Home.vue";
import AdminLayout from "@/layout/admin.vue"
import normalLayout from "@/layout/normal.vue"
import ShopLayout from "../views/user/shop/Layout.vue"

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },


  // 商城
  {
    path: '/shop',
    component: ShopLayout,
    children: [
      {
        path: "",
        name: "shop",
        component: () => import(/* webpackChunkName: "shop" */ '../views/user/shop/Shop.vue'),
      }, {
        path: "product/:product_id",
        name: "product",
        component: () => import(/* webpackChunkName: "shop" */ '../views/user/shop/Product.vue'),
      },
    ]
  },




  //後台
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      // 頁面管理
      {
        path: 'pages',
        component: normalLayout,
        children: [
          {
            path: '',
            component: () => import(/* webpackChunkName: "pages" */ '../views/pageList/index.vue'),
          },
          {
            path: "set/:page_id",
            name: "pageSet",
            component: () => import(/* webpackChunkName: "pages" */ '../views/pageSet/index.vue'),
          },
          {
            path: "editor/:page_id/:component_type/:component_id",
            name: "pageEditor",
            component: () => import(/* webpackChunkName: "pages" */ '../views/editor/index.vue'),
          },
        ]
      },
      // 商品管理
      {
        path: 'products',
        component: normalLayout,
        children: [
          {
            path: '',
            name: 'productList',
            component: () => import(/* webpackChunkName: "products" */ '../views/products/productList.vue'),
          },
          {
            path: ':product_id',
            name: 'productPage',
            component: () => import(/* webpackChunkName: "products" */ '../views/products/productPage.vue'),
          },
          {
            path: 'category',
            component: () => import(/* webpackChunkName: "products" */ '../views/products/productCategoryList.vue'),
            children: [
              // {
              //   name:'productList',
              //   path: ':category_name',
              //   component: () => import(/* webpackChunkName: "products" */ '../views/pageList/index.vue'),
              // },

            ]
          },

        ]
      },


    ]
  },
  {
    path: "/:page_id",
    name: "Pages",
    component: () => import(/* webpackChunkName: "Pages" */ '../views/user/index.vue'),
  },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;