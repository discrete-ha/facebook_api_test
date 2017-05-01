import React from 'react';
import { connect } from 'react-redux';
import CommonStyle from '../style/common.css';

class Loading extends React.Component {

	constructor(props){
		super(props);
	}

    render(){
    	if (!this.props.isFetching) 
    		return null;

        return (
            <div style={CommonStyle.App.Loading}>
            	<img id="loading_img" src="https://s3-ap-northeast-1.amazonaws.com/discreteportfolio/loading.gif"/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
    	isFetching: state.isFetching
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

Loading = connect(mapStateToProps, mapDispatchToProps)(Loading);

export default Loading;
