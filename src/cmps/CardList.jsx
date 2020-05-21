import React, { Children } from 'react';
import { CardPreview } from './CardPreview';

export class CardList extends React.Component {

    render() {

        return (

            <div>
                {this.props.children}
            </div>



        )
    }

}
