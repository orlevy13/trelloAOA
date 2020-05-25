import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../store/actions/boardActions';
import { Clear } from '@material-ui/icons';

class _LabelsEdit extends Component {
    render() {
        return (
            <section className="edit-labels">
                <div className="edit-labels-header flex align-center">
                    <p className="grow">Labels</p>
                    <button onClick={this.props.toggleIsLabelEditShown}><Clear /></button>
                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    updateBoard
}

export const LabelsEdit = connect(mapStateToProps, mapDispatchToProps)(_LabelsEdit)