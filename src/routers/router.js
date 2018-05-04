
//登录页面
import Sign from '../constants/signIn/Sign.js'
//注册页面
import Pass from '../constants/password/Pass.js'

import App from '../constants/app/App.js';
import Index from '../constants/index/index.js'

const routes = [
    {
        path: '/',
        component: Sign,
        exact: true,
    },
    {
        path: '/index/:id',
        exact: true,
        component: Index
    },
    {
        path: '/app/:id',
        exact: true,
        component: App
    },
    {
        path: '/pass',
        exact: true,
        component: Pass
    },
    {
        component: Index
    },
];

export default routes