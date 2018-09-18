import React from 'react';
import './style.css';

class MessageBoard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	setCookie() {
		let cname = 'msg'
		let cvalue = this.state.value
		let exdays = 2

		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

		this.setState({ msg: this.getCookie('msg') })
	}

	getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	render() {
		const { value, msg } = this.state

		return (
			<div>
				<form onSubmit={() => this.setCookie()}>
					<label>
						<input
							type="text"
							value={value}
							onChange={e => this.handleChange(e)} />
					</label>
					<input type="submit" value="Submit" />
				</form>

				{msg ?
					<div>
						<br/>
						<p>Latest message:</p>
						<p>{msg}</p>
					</div>
					:
					<p>No new messages</p>
				}
			</div>
		);
	}
}

export default MessageBoard;