import React from 'react';
import {
    addPost,
    getProfile, getStatus, onPutPhotos, saveProfile,
    updateStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} onPutPhotos={this.props.onPutPhotos}
            isOwner={!this.props.match.params.userId} onSubmitProfileForm={this.props.saveProfile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.authReducer.userId
    }
};


export default compose(
    connect(mapStateToProps, {addPost, getProfile, getStatus, updateStatus, onPutPhotos, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)