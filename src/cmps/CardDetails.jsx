import React, { Component } from 'react';
import CardDetailsHeader from './CardDetailsHeader'
import CardDetailsDesc from './CardDetailsDesc';
import CardDetailsSideBar from './CardDetailsSideBar'

export class CardDetails extends Component {
    render() {
        return (


            <section className="card-details-container">

                <div className="card-details-header">
                    < CardDetailsHeader />
                </div>
                <div className="main-col">
                    < CardDetailsDesc />
                </div>
                <div className="card-details-side-bar">
                    < CardDetailsSideBar />
                </div>
            </section>

        )
    }
}
