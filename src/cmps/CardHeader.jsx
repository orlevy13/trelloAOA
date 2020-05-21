import React, { Component } from 'react'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
// import PropTypes from 'prop-types'

export default class CardHeader extends Component {
    state = {
        txt: '',
        onPhase: '',
        isTitleShown: true
    }

    // static propTypes = {
    //     prop: PropTypes
    // }

    componentDidMount() {
        this.setState({ txt: this.props.card.title, onPhase: this.props.card.onPhase })
    }

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
        const { txt, isTitleShown, onPhase } = this.state
        console.log('car details render', isTitleShown);

        if (this.state)
            return (
                <div>

                    <div className="card-header-container">
                        <NoteOutlinedIcon />
                        {isTitleShown && <span><h2 className="card-title" onClick={this.openInput} >{txt}</h2></span>}
                        {(!isTitleShown) && <span><textarea className="card-title-input" autoFocus onBlur={this.openInput} placeholder="Title..."
                            onChange={this.handleChange} value={txt} ></textarea></span>}
                    </div>
                    <p className="card-link">in list <a href="#">{onPhase}</a></p>
                </div>
            )
        else return 'loading'
    }
}
