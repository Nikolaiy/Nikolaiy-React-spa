import React from 'react';
import {addPostActionCreator, getProfile, onPostChangeActionCreator, setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {profilePage} from "../../API/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        getProfile()
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 12 }
        profilePage(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
    }
};

const WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addPost: addPostActionCreator,
    updateNewPostText: onPostChangeActionCreator,
    setUserProfile
})(WithUrlProfileContainer);