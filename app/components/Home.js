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
				<ul>
					<li>
						<Link to="/locations">名胜古迹</Link>
					</li>
				</ul>
			</div>
		)
	}
};

export default Home;