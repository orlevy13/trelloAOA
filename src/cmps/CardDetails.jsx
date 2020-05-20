import React, { Component } from 'react';
import CardDetailsHeader from './CardDetailsHeader'
import CardDetailsDesc from './CardDetailsDesc';


export class CardDetails extends Component {
    render() {
        return (
            <section className="card-details-container">
                < CardDetailsHeader />

                <br />
                < CardDetailsDesc />
            </section>
        )
    }
}
