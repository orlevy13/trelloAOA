import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BoardList } from '../cmps/BoardList';

class _Home extends Component {
    render() {
        return (
            <main className="home-container">
                <div className="lft-sd-lb">

                </div>
                <div className="home-text  flex column">
                    <h1>Manage successful projects, remotely.</h1>
                    <h3>The project management software that
                    keeps teams going. Collaborate as if you
                    were right next to each other.</h3>
                    <span className="btn-home">Get Started</span>

                </div>
                <footer>

                </footer>

            </main>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
