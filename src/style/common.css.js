
export default {
	App:{
		Row:{
			clear:"both",
			textAlign:"center",
			paddingTop: "15px"
		},
		Error:{
			Text:{
				color:"red",
				fontSize:"12px",
				marginTop: "10px"
			}
		},
		Loading:{
			height: "100%",
			width: "100%",
			backgroundColor: "#4861ac",
			position: "fixed",
			padding: 0,
			margin: 0,
			top: 0,
			left: 0,
			opacity: 0.6,
			zIndex:2
		},

		Dialog:{
			height: "100%",
			width: "100%",
			backgroundColor: "#4861ac",
			position: "fixed",
			padding: 0,
			margin: 0,
			top: 0,
			left: 0,
			opacity: 0.6,
			zIndex:2
		},

		DialogContents:{
			position: "absolute",
			width: "150px",
			height: "50px",
			backgroundColor: "#fff",
			margin: "auto",
			top: "0",
			bottom: "0",
			right: "0",
			left: "0",
			zIndex: "3",
			padding: "20px",
			textAlign: "center",
			color: "#4861ac"
		},

		Ul:{
			listStyleType: "none",
			padding: 0
		},
		UlHorizontal:{
			listStyleType: "none",
			display: "-webkit-box",
			padding: 0,
			width: "100%",
			overflowX: "scroll"
		},
		Li:{
			display: "-webkit-box",
			margin: "5px"
		},
		LiPost:{
			textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    		color: "#fff",
			width: "130px",
			height: "170px",
			overflow: "hidden",
			margin: "10px",
			wordBreak: "break-word",
			position: "relative",
			fontSize: "13px"
		},
		divPostPicture:{
			width: "130px",
			height: "130px",
			textAlign: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center"
		},
		commentText:{

		},
		noPostsText:{
			color: "#bfbebe",
			fontSize: "13px"
		}
	},

	Facebook:{

		WrapperLogin:{
			margin: "auto",
			width: "250px",
			height: "30px",
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		},

		WrapperLogout:{
			margin: "10px",
			height: "30px"
		},

		LoginText:{
			cursor:"pointer",
			float: "left",
			lineHeight: "34px",
			fontSize: "21px",
			paddingBottom: "15px",
			fontWeight: "bold",
			color: "#828282"
		},

		Logo:{
			cursor:"pointer",
			backgroundImage: "url(https://s3-ap-northeast-1.amazonaws.com/discreteportfolio/facebook-logo.png)",
			backgroundRepeat: "no-repeat",
			backgroundSize: "contain",
			width: "120px",
    		height: "30px",
    		float: "left"
		},

		User:{
			Wrapper:{
				float: "right",
				display: '-webkit-box'
			},

			Picture:{
				height: "30px",
				width: "30px",
				marginRight: "10px",
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat"
			},

			Name:{
				lineHeight:"30px"
			}
		}
	}
}