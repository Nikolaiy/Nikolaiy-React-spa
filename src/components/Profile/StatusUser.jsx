import React from 'react';

// import s from './StatusUser.module.css'

export class StatusUser extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState ({
            editMode: true,
            status: this.props.status
        })
    };

    deactivateEditMode = () => {
        this.setState ({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
};