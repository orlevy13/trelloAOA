import React, { Component } from 'react'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import CardCheckListItems from './CardCheckListItems'
// import PropTypes from 'prop-types'

export default class CardCheckList extends Component {
    state = {
        checkList: null,
        txt: ''
    }

    // static propTypes = {
    //     prop: PropTypes
    // }
    componentDidMount() {
        this.setState({ checkList: this.props.card.checkList })

    }

    openInput = () => {
        console.log('open input');
        this.setState(prevState => ({ isShown: !prevState.isShown }))
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = (field === 'isDone') ? target.done : target.value;
        console.log('card check list target', target.attributes);

        var id = target.attributes.index.value;
        let newState = Object.assign({}, this.state);
        newState.items[id][field] = value;

        if (field === 'txt' && value !== '') {
            newState.items.push({ txt: '', isDone: false });
        }
        this.setState({ newState });
        this.props.onChangeCheckList(newState.items);
    }


    // deleteItem = (idx) => {
    //     if (this.state.checkList.length === 1) return;
    //     let newState = Object.assign({}, this.state);

    //     for (let index = idx + 1; index < newState.checkList.length - 1; index++) {
    //         const item = newState.checkList[index];
    //         item.idx -= 1;
    //     }
    //     newState.checkList.splice(idx, 1);

    //     this.setState({ checkList: newState.checkList });
    //     this.props.onChangeCheckList(newState.checkList);
    // }


    render() {
        const { txt, isTitleShown } = this.state


        if (this.state.checkList) {
            console.log('props at checklist', this.props);
            console.log('state at checklist', this.state.checkList);
            return (
                <div className="card-check-list">
                    <div className="check-list-header-container">
                        <p><NoteOutlinedIcon /><span className="desc-header">Check list</span></p>


                        <progress id="file" value="32" max="100"> 32% </progress>
                        <button>Delete</button>
                    </div>
                    <div />
                    <CardCheckListItems items={this.state.checkList} onHandleChange={this.handleChange} />
                    {/* {isTitleShown && <span><h2 className="card-title" onClick={this.openInput} >{txt}</h2></span>}
                    {(!isTitleShown) && <span><textarea className="card-title-input"
                        autoFocus onBlur={this.openInput} placeholder="Title..."
                        onChange={this.handleChange} value={txt} ></textarea></span>} */}
                </div>


            )
        }
        else return 'loading'
    }
}
