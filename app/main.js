/**
 * Created by Geweidong on 2017/2/21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RoutRouters from './RoutRouters.js';

import {browserHistory} from 'react-router';

// IndexRoute指定加载默认子组件
// IndexRedirect指定跳转到默认子组件

ReactDOM.render(
    <RoutRouters history={browserHistory} />, 
    document.getElementById('content')
);

// path: 代表用户访问的路径
// component: 用户访问这个路径的时候，页面将会导向哪里？这里的目的地址就是React的一个组件


// Router本身就是个组件
// 我们可以将Router放在一个独立的组件文件中，然后在入口文件中import进来作为一个组件来使用，以保持应用入口文件的简洁和职责单一
// 通过嵌套路由可以实现如导航栏等的各个子组件共享的页面
// 通过IndexRouter可以指定一个父级路由的默认加载子组件


