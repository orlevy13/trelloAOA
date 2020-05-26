import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoard, setCard } from '../store/actions/boardActions';
import { CardHeader } from './CardHeader';
import { CardDesc } from './CardDesc';
import { CardChecklist } from './CardChecklist';
// import MaterialUIPickers from './CardDueDate'
// import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import {
    PermIdentity, LabelOutlined, PlaylistAddCheck,
    Schedule, Attachment, CropOriginal
} from '@material-ui/icons';
import { LabelsEdit } from './LabelsEdit';
import { MembersEdit } from './MembersEdit';

class _Card extends Component {
    state = {
        card: null,
        isLabelEditShown: false,
        isMembersEditShown: false
    }

    componentDidMount() {
        var card;
        this.props.board.phaseLists.forEach(phase => {
            const res = phase.cards.find(card => card.id === this.props.cardId);
            if (res) card = res;
        });
        this.setState({ card });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.board) !== JSON.stringify(this.props.board)) {
            var card;
            this.props.board.phaseLists.forEach(phase => {
                const res = phase.cards.find(card => card.id === this.props.cardId);
                if (res) card = res;
            });
            this.setState({ card });
        }
    }

    addCheckList = () => {
        const cloneCard = JSON.parse(JSON.stringify(this.state.card));
        if (!cloneCard.checkList.length) {
            cloneCard.checkList.push({ txt: '', isDone: false });
            this.setState({ card: cloneCard })
        }
    }

    toggleIsLabelEditShown = () => {
        this.setState(prevState => ({ isLabelEditShown: !prevState.isLabelEditShown }));
    }

    toggleIsMembersEditShown = () => {
        this.setState(prevState => ({ isMembersEditShown: !prevState.isMembersEditShown }));
    }

    render() {
        if (!this.props.board || !this.state.card) return 'Loading';
        const { card, isLabelEditShown, isMembersEditShown } = this.state;

        return (
            <section style={{ width: 0 }}>
                <div onMouseDown={() => { this.props.setCard(null) }} className="card-modal" ></div>

                <div className="card-container" >
                    <div className="card-header">
                        < CardHeader card={card} />
                    </div>
                    <div className="main-col">
                        < CardDesc card={card} />
                        {(card.checkList.length > 0) && < CardChecklist card={card} />}
                    </div>
                    {/* <MaterialUIPickers /> */}
                    <div className="card-side-bar">
                        <section>
                            <div className="card-sidebar">
                                <button onClick={this.toggleIsMembersEditShown}
                                    className="card-sidebar-btn"><span>
                                        <PermIdentity className="icon" /></span>Members</button>
                                {isMembersEditShown &&
                                    <MembersEdit members={this.props.board.members} card={card}
                                        toggleIsMembersEditShown={this.toggleIsMembersEditShown} />}

                                <button onClick={this.toggleIsLabelEditShown} className="card-sidebar-btn">
                                    <span ><LabelOutlined className="icon" /></span>Labels</button>

                                {isLabelEditShown &&
                                    <LabelsEdit card={card} toggleIsLabelEditShown={this.toggleIsLabelEditShown} />}

                                {(card.checkList.length < 1) && <button className="card-sidebar-btn"
                                    onClick={this.addCheckList}><span>
                                        <PlaylistAddCheck className="icon" /></span>Checklist</button>}

                                <button className="card-sidebar-btn"><span>
                                    <Schedule className="icon" /></span>Due Date</button>
                                <button className="card-sidebar-btn"><span>
                                    <Attachment className="icon" /></span>Attachment</button>
                                <button className="card-sidebar-btn"><span>
                                    <CropOriginal className="icon" /></span>Cover</button>
                            </div>
                        </section>
                    </div>
                </div>
            </section >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board,
        card: state.trelloApp.card
    }
}

const mapDispatchToProps = {
    loadBoard,
    setCard
}

export const Card = connect(mapStateToProps, mapDispatchToProps)(_Card)