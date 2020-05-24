import React, { Component } from 'react';

export class CardMenu extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.hideMenu)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideMenu)
    }

    hideMenu = (ev) => {
        if (ev.code === 'Escape') this.props.toggleIsMenuShown();
    }

    render() {
        return (
            <section>
                <div onMouseDown={this.props.toggleIsMenuShown} className="screen"></div>
                <section className="menu-container">
                    <form>
                        <textarea name="title" cols="30" rows="5" spellCheck="false"
                            autoComplete="off" autoFocus />
                        <button>Send</button>
                    </form>
                    <div>
                        <button>Edit Labels</button>
                        <button>Change Members</button>
                        <button>Move</button>
                        <button>Change Due Date</button>
                        <button>Delete</button>
                    </div>
                </section>
            </section>
        );
    }
}


