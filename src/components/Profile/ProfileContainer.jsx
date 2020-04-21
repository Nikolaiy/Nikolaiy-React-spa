import React from 'react';
import {
    addPost,
    getProfile, onPostChange,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 7269 }
        this.props.getProfile(userId)
    }

    render() {

        if(!this.props.isAuth) {
            return <Redirect to='/login'/>
        };

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

const WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addPost,
    onPostChange,
    getProfile
})(withAuthRedirect(WithUrlProfileContainer));