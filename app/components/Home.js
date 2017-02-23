/**
 * Created by Geweidong on 2017/2/21.
 */
import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	render(){
		return (
			<div>
				<h1>React-router</h1>
				<nav>
		            <Link to="/locations">名胜古迹</Link> |
		            <Link to="/about">关于techgogogo</Link>
		            {this.props.children}
		        </nav>
			</div>
		)
	}
};

export default Home;