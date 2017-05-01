import React from 'react';
import { connect } from 'react-redux';
import { setError, setFetching, setDialog } from '../actions/system';
import CommonStyle from '../style/common.css';

class PageList extends React.Component {

	constructor(props){
		super(props);
		this.comment = {};
	}

	goPostPage(fid){
		window.open("http://www.facebook.com/"+fid);
	}

	commentOnPost(fid){
		if (this.comment[fid].length <= 0) 
			return false;

		this.props.setFetching(true);
		window.FB.api(fid+'/comments', 'post', {message:this.comment[fid]}, function(response) {
			try{
				this.props.setDialog(true, "Comment complete!");
			}catch(e){
				console.error(e);
			}
			this.props.setFetching(false);
		}.bind(this));
	}

	handleChange(fid, event) {
		this.comment[fid] = event.target.value;
	}

	renderPostsItems(page){

		let postslistItems = page.posts ? page.posts.data.map((post) => {
				
				let divPostPicture = {
					...CommonStyle.App.divPostPicture,
					backgroundImage:"url("+post.picture+")"
				}
				return <li key={post.id} style={CommonStyle.App.LiPost}>
					<div style={divPostPicture} onClick={this.goPostPage.bind(this, post.id)}>
						{post.message}
					</div>
					<div>
						<input style={CommonStyle.App.commentText} placeholder="Input text"  type="text" onChange={this.handleChange.bind(this, post.id)}/>
						<input className="comment_button" type="button" value="Comment" onClick={this.commentOnPost.bind(this, post.id)}/>
					</div>
				</li>;
			}): <div style={CommonStyle.App.noPostsText}>No Posts</div>;


		return postslistItems;
	}

	renderListItem(){

		const listItems = this.props.pageData.map((page) => {
    		let pictureStyle = {
				...CommonStyle.Facebook.User.divPostPicture,
				backgroundImage:"url("+page.picture.data.url+")"
			}
			
			let postslistItems = this.renderPostsItems(page);


			return <li key={page.id+page.name}>
				<div style={CommonStyle.App.Li}>
					<div style={pictureStyle}></div>
					<div>
						{page.name}
					</div>
				</div>
				<div>
					<ul style={CommonStyle.App.UlHorizontal}>
						{postslistItems}
					</ul>
				</div>
			</li>
    	});

    	return listItems;
	}

    render(){
    	if (!this.props.pageData)
    		return null;

        return (
            <ul style={CommonStyle.App.Ul}>{this.renderListItem()}</ul>
        );
    }
}

let mapStateToProps = (state) => {
    return {
    	pageData: state.pageData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setError: (message) => dispatch(setError(message)),
        setFetching: (flag) => dispatch(setFetching(flag)),
        setDialog: (flag, message) => dispatch(setDialog(flag, message))
    }
}

PageList = connect(mapStateToProps, mapDispatchToProps)(PageList);

export default PageList;
