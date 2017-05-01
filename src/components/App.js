import React from 'react';
import FacebookLogin from './FacebookLogin';
import InputForm from './InputForm';
import PageList from './PageList';
import Loading from './Loading';
import Dialog from './Dialog';
import CommonStyle from '../style/common.css';
import { setAuthData } from '../actions/login';
import { setFetching } from '../actions/system';
import { connect } from 'react-redux';

class App extends React.Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.initFacebook();	
	}

	initFacebook(){

		let props = this.props;
		props.setFetching(true);
		(function (d, s, id) {
			const element = d.getElementsByTagName(s)[0];
			const fjs = element;
			let js = element;
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		window.fbAsyncInit = function() {
			FB.init({
			appId      : '1293269870727566',
			xfbml      : true,
			version    : 'v2.9',
			permissions : 'publish_stream'
			});
			FB.AppEvents.logPageView();
			FB.getLoginStatus(function(response) {
				if (response.status === "connected") {
					props.setAuthData(response.authResponse);
				}else{
					props.setAuthData(null);
				}
				props.setFetching(false);
			}, true);
		};
	}

	renderContents(){
		if (this.props.authData)
			return (
				<div>
					<Dialog/>
					<InputForm/>
					<PageList/>
				</div>
			);

		return null;
	}

    render(){
        return (
        	<div>
        		<Loading/>
				<FacebookLogin/>
				{this.renderContents()}
			</div>
        );

    }
}

let mapStateToProps = (state) => {
    return {
    	authData: state.authData,
    	isFetching: state.isFetching
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthData: (data) => dispatch(setAuthData(data)),
        setFetching: (flag) => dispatch(setFetching(flag))
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
