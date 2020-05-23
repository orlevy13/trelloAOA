import React, { Component } from 'react'
import DescriptionIcon from '@material-ui/icons/Description';

export default class CardDesc extends Component {
    state = {
        txt: ''
    }

    componentDidMount() {
        this.setState({ txt: this.props.card.desc })
    }

    handleChange = ({ target }) => {
        var value = target.value
        this.setState({ txt: value })
    }

    render() {

        if (this.state.txt)
            return (
                <section>
                    <div className="desc-header-container">
                        <DescriptionIcon /><span className="desc-header">Description</span>
                    </div>
                    <div className="card-desc-container">
                        <textarea className="card-desc-input" placeholder="Add a more detailed description..."
                            onChange={this.handleChange} value={this.state.txt}></textarea>
                    </div>
                </section>
            )
        else return 'loading'
    }
}
