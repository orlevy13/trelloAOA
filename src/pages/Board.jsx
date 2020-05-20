import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhaseList } from '../cmps/PhaseList';

class _Board extends Component {
    render() {
        return (
            <main>
                <section className="board-nav">

                </section>
                <section className="board-content flex">

                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
