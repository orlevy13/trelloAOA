import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class CardDetailsHeader extends Component {
    state = {
        txt: '',
        isTitleShown: true
    }

    // static propTypes = {
    //     prop: PropTypes
    // }
    componentDidMount() {
        this.setState({ isTitleShown: true })
    }

    openInput = () => {
        this.setState(prevState => ({ isTitleShown: !prevState.isTitleShown }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        var value = target.value
        this.setState({ txt: value })
    }



    render() {
        const { txt, isTitleShown } = this.state

        if (txt === '')
            return (
                <section className="card-details-header-container">
                    <div>
                        {{ isTitleShown } && <h2 className="card-details-title" onClick={this.openInput} >{txt}</h2>};
                        {(!{ isTitleShown }) && <textarea className="card-details-title-input " placeholder="Title..." onChange={this.handleChange} value={txt} ></textarea>}
                    </div>
                    <p className="details-card-link">in list <a href="#">ideas</a></p>
                </section>
            )
        else return 'loading'
    }
}
