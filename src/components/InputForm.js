import React from 'react';
import { connect } from 'react-redux';
import { setError, setFetching } from '../actions/system';
import { setPageData } from '../actions/pages';
import CommonStyle from '../style/common.css';

class InputForm extends React.Component {

	constructor(props){
		super(props);
		this.searchValue = null;
	}

	searchPage(){
		let searchValue = this.searchValue;
		if (!searchValue || searchValue.length === 0){
			this.props.setError("Keyword is too short!");
			return false;
		}
		this.props.setFetching(true);
		window.FB.api('search?q='+searchValue+'&type=page&fields=name,picture,posts{id,message,picture}&limit=5', 'get', {message:"api test"}, function(response) {
			try{
				this.props.setPageData(response.data);
				this.props.setFetching(false);
			}catch(e){
				console.error(e);
				this.props.setFetching(false);
			}
		}.bind(this));
	}

	handleChange(event) {
		this.searchValue = event.target.value;
		this.searchValue.length > 0 ? this.props.setError() : this.props.setError("Keyword is too short!");
	}

    render(){
        return (
            <div style={CommonStyle.App.Row}> 
            	<input className="input-text" type="text" placeholder="Input Keyword" onChange={this.handleChange.bind(this)}/>
            	<input className="submit_button" type="button" onClick={this.searchPage.bind(this)} value="Search" />
            	<div style={CommonStyle.App.Error.Text}>{this.props.errorText}</div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
    	errorText: state.errorText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setError: (message) => dispatch(setError(message)),
        setPageData: (data) => dispatch(setPageData(data)),
        setFetching: (flag) => dispatch(setFetching(flag))
    }
}

InputForm = connect(mapStateToProps, mapDispatchToProps)(InputForm);

export default InputForm;
