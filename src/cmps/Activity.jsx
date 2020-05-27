import React from 'react';
import moment from 'moment';
import { updateBoard, setCard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { MemberInitials } from '../cmps/MemberInitials';
class _Activity extends React.Component {

    dynamicActivity = (activity) => {

        const { at, user, type, object, operation, desc } = activity;

        var userElmemnt = null;
        var elmentType = null;
        if (desc) {
            userElmemnt = <a className="activity-user" href={`/user/${user._id}`} target="_blank" rel="noopener noreferrer">{user.fullName}</a>;

            return (
                <div className="activity flex">
                    <MemberInitials fullName={user.fullName} />
                    <div className="activity-content flex column">
                        <span>{userElmemnt} {` ${desc}`}</span>
                        <span onClick={this.OpenByObjectType} className="activity-object" >{object.title}</span>
                        <div className="activity-time">{moment(at).fromNow()}</div>
                    </div>
                </div>
            )
        }
        else {

            if (!user) return <div style={{ "display": "none" }}>stam</div>

            userElmemnt = <a className="activity-user" href={`/user/${user._id}`} target="_blank" rel="noopener noreferrer">{user.fullName}</a>;

            elmentType = <span onClick={this.OpenByObjectType} className="activity-object" >{object.title}</span>;

            return (

                < div className="activity flex" >
                    <MemberInitials fullName={user.fullName} />
                    <div className="activity-content flex column">
                        <span>{userElmemnt} {` ${operation} ${type}`} {elmentType}</span>
                        <div className="activity-time">{moment(at).fromNow()}</div>
                    </div>
                </div>
            )

        }
    }
    OpenByObjectType = () => {
        const { type, object, } = this.props.activity;
        // parent is menu and not card and type is card
        if (type.toLowerCase() === 'card' && this.props.allowOpenCard) {
            const boardClone = JSON.parse(JSON.stringify(this.props.board));
            const cardId = object.id;
            const currPhase = boardClone.phaseLists.find(phase => phase.cards.some(card => card.id === cardId));
            const card = currPhase.cards.find(card => card.id === cardId);
            this.props.onCloseMenu(null);
            this.props.setCard(card);
        }
    }


    render() {
        const { activity } = this.props
        return (
            this.dynamicActivity(activity)
        )
    }
}
const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    updateBoard,
    setCard
}

export const Activity = connect(mapStateToProps, mapDispatchToProps)(_Activity)
