import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import DescriptionIcon from '@material-ui/icons/Description';

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
            <section>
                <div className="desc-header-container">
                    <DescriptionIcon /><span className="desc-header">Description</span>
                </div>
                <div className="card-details-desc-container">
                    <textarea className="card-details-desc-input" placeholder="Add a more detailed description..."
                        onChange={this.handleChange} value={this.state.txt}></textarea>
                </div>
            </section>
        )
    }
}
