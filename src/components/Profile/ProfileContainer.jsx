import React from 'react';
import {
    addPost,
    getProfile, onPostChange,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 12 }
        this.props.getProfile(userId)
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
    addPost,
    onPostChange,
    getProfile
})(WithUrlProfileContainer);