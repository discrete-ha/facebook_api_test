import React from 'react';
import { connect } from 'react-redux';
import { setDialog } from '../actions/system';
import CommonStyle from '../style/common.css';

class Dialog extends React.Component {

    constructor(props){
        super(props);
    }

    closeDialog(){
        this.props.setDialog(false, null);
    }

    render(){
        if (!this.props.showDialog)
            return null;

        return (
            <div >
                <div style={CommonStyle.App.Dialog}></div>
                <div style={CommonStyle.App.DialogContents}>{this.props.dialogMessage}
                    <input className="dialog_button" type="button" onClick={this.closeDialog.bind(this)} value="Close" />
                </div>
                
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        showDialog: state.dialog.show,
        dialogMessage: state.dialog.message
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setDialog: (flag) => dispatch(setDialog(flag)),
    }
}

Dialog = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default Dialog;
