import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhaseList } from '../cmps/PhaseList';

class _Board extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
