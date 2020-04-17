import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator, setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.setUserProfile(response.data)
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