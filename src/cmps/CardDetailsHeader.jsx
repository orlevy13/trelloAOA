import React, { Component } from 'react'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
// import PropTypes from 'prop-types'

export default class CardDetailsHeader extends Component {
    state = {
        txt: '',
        isTitleShown: true
    }

    // static propTypes = {
    //     prop: PropTypes
    // }


    openInput = () => {
        console.log('open input');
        this.setState(prevState => ({ isTitleShown: !prevState.isTitleShown }))
    }

    handleChange = ({ target }) => {
        const field = target.name
        var value = target.value
        this.setState({ txt: value })
    }



    render() {
        const { txt, isTitleShown } = this.state
        console.log('car details render', isTitleShown);

        if (this.state)
            return (
                <div>

                    <div className="card-details-header-container">
                        <NoteOutlinedIcon />
                        {isTitleShown && <span><h2 className="card-details-title" onClick={this.openInput} >{txt}</h2></span>}
                        {(!isTitleShown) && <span><textarea className="card-details-title-input" autoFocus onBlur={this.openInput} placeholder="Title..."
                            onChange={this.handleChange} value={txt} ></textarea></span>}
                    </div>
                    <p className="details-card-link">in list <a href="#">ideas</a></p>
                </div>
            )
        else return 'loading'
    }
}
