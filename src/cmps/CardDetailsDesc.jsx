import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class CardDetailsDesc extends Component {
    state = {
        txt: ''
    }

    // static propTypes = {
    //     prop: PropTypes
    // }
    handleChange = ({ target }) => {
        const field = target.name
        var value = target.value
        this.setState({ txt: value })
    }



    render() {
        return (
            <section className="card-details-desc-container">
                <h3>Description</h3>
                <textarea className="card-details-desc-input" placeholder="Add a more detailed description..." onChange={this.handleChange} value={this.state.txt}></textarea>




            </section>
        )
    }
}
