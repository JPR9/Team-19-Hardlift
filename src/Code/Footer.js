import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Footer = () => (
    <div id="footer">

    
<ul className="col1">
    <h4>STAY CONNECTED</h4>
	<table><tr>
		<td>
			<button className="ui circular facebook icon button">
				<i className="facebook icon"></i>
			</button>
		</td>
		<td>
			<button className="ui circular youtube icon button">
				<i className="youtube icon"></i>
			</button>
		</td>
		<td>
			<button className="ui circular twitter icon button">
				<i className="twitter icon"></i>
			</button>
		</td>
	</tr></table>
</ul>
    
<ul className="col2">
    <li>ABOUT</li>
    <li>WORKOUT</li>
    <li>BLOG</li>
    </ul>


<ul className="col3">
    <li>SHOP</li>
    <li>CONTACT US</li>
    <li>LOGIN/SIGNUP</li>
    </ul>

<ul className="col4">
    <h4>JOIN OUR NEWSLETTER</h4>
    <form className="ui form">
		<div className="field">
			<label>Email Address</label>
			<input type="text" name="email" placeholder="example@example.com"/>
		</div>
		<button className="ui mini button">Submit</button>
	</form>
</ul>
    </div>
)

export default Footer