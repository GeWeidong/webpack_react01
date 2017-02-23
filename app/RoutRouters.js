/**
 * Created by Geweidong on 2017/2/21.
 */
import React,{PropTypes,Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import Locations from './components/Locations.js';
import About from './components/About.js';

import {Router,Route,browserHistory,IndexRoute,IndexRedirect} from 'react-router';

// IndexRoute指定加载默认子组件
// IndexRedirect指定跳转到默认子组件

export default class RoutRouters extends Component{
	render(){
		const {history} = this.props;
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Home}>
					<Route path="/about" component={About} />
					<Route path="/locations" component={Locations} />
				</Route>
			</Router>
		)
	}
}

// path: 代表用户访问的路径
// component: 用户访问这个路径的时候，页面将会导向哪里？这里的目的地址就是React的一个组件


