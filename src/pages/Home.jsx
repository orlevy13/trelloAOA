import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BoardList } from '../cmps/BoardList';

class _Home extends Component {
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

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
