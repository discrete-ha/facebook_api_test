import React from 'react';
import { connect } from 'react-redux';
import { setAuthData, setUserData } from '../actions/login';
import CommonStyle from '../style/common.css';

class FacebookLogin extends React.Component {

	constructor(props){
		super(props);
	}

	loginFacebook(){
		let props = this.props;
		window.FB.login(function(response) {
			try{
				if (response.authResponse) {
					props.setAuthData(response.authResponse);
					FB.api('/me', {fields: 'name,picture'}, function(response) {
						props.setUserData({
							name:response.name,
							picture:response.picture.data.url
						});
					});

				} else {
					props.setAuthData();
				}
			}catch(e){
				console.error(e);
			}
		},{
			scope: 'publish_actions,user_posts'
		});
	}

	logoutFacebook(){
		let props = this.props;
		window.FB.logout(function(response) {
			try{
				props.setAuthData();
			}catch(e){
				console.error(e);
			}
		});
	}

	renderLoginButton(){
		return (
			<div style={CommonStyle.Facebook.WrapperLogin}>
				<div onClick={this.loginFacebook.bind(this)} style={CommonStyle.Facebook.LoginText}>Login with</div>
				<div onClick={this.loginFacebook.bind(this)} style={CommonStyle.Facebook.Logo}></div>
			</div>
		)
	}

	renderLogoutButton(){
		return (
			<div style={CommonStyle.Facebook.WrapperLogout}>
				<div onClick={this.logoutFacebook.bind(this)} style={CommonStyle.Facebook.LoginText}>Logout of </div>
				<div onClick={this.logoutFacebook.bind(this)} style={CommonStyle.Facebook.Logo}></div>
				{this.renderUserInfo()}
			</div>
		)
	}

	renderUserInfo(){
		if (this.props.userData){
			let pictureStyle = {
				...CommonStyle.Facebook.User.Picture,
				backgroundImage:"url("+this.props.userData.picture+")"
			}

			return (
			<div style={CommonStyle.Facebook.User.Wrapper}>
				<div style={pictureStyle}>
				</div>
				<div style={CommonStyle.Facebook.User.Name}>
					{this.props.userData.name}
				</div>
			</div>
			);	
		}else{
			return null;
		}
		
	}

    render(){
        return (
        	<div>
			{ this.props.authData ? this.renderLogoutButton() : this.renderLoginButton() }
			</div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
    	authData: state.authData,
    	userData: state.userData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthData: (data) => dispatch(setAuthData(data)),
        setUserData: (data) => dispatch(setUserData(data)),
    }
}

FacebookLogin = connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);

export default FacebookLogin;

