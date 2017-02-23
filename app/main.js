/**
 * Created by Geweidong on 2017/2/21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/productBox.js';
import Locations from './components/Locations.js';

import {Router,Route,browserHistory} from 'react-router';



ReactDOM.render(
    <Router history={browserHistory}>
        <route path="/" component={Home} />
        <route path="/locations" component={Locations} />
    </Router>, 
    document.getElementById('content')
);

// path: 代表用户访问的路径sdfsdf
// component: 用户访问这个路径的时候，页面将会导向哪里？这里的目的地址就是React的一个组件


