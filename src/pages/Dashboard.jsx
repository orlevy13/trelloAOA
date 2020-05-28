import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { boardService } from '../services/boardService';
const bgColors =
    [
        '#003f5c',
        '#2f4b7c',
        '#665191',
        '#a05195',
        '#d45087',
        '#f95d6a',
        '#ff7c43',
        '#ffa600',
        '#0b1f5c',
        '#57236d',
        '#92226f',
        '#c42b65',
        '#e94a50',
        '#fe7634',
        '#ffa600',
    ];
const hovColors =
    [
        '#FF6384A0',
        '#36A2EBA0',
        '#FFCE56A0',
        '#e53935',
        '#e57373',
        '#6633FF',
        '#FF00CC',
        '#9900FF',
        '#DAF7A6',
        '#82b1ff',
        '#1976d2',
        '#e53935',
        '#e57373',
        '#6633FF',
        '#FF00CC',
    ];


export default class Dashboard extends Component {

    state = {
        board: null
    }

    componentDidMount() {
        this.getBoard('5ece91a4b3788928d0e4a47b');


    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }


    getBoard = async (id) => {

        const board = await boardService.getById('5ece91a4b3788928d0e4a47b');
        this.setState({ board });
        console.log(board);

    }
    getTasksPerDevloperData() {

        const { board } = this.state;
        var devTaskMap = {};
        board.phaseLists.forEach(phase => {
            phase.cards.forEach(card => {
                card.assignedTo.forEach(member => {
                    (!devTaskMap[member.fullName]) ? devTaskMap[member.fullName] = 1 : devTaskMap[member.fullName] += 1;
                })
            })
        });

        return {
            labels: [
                //the labels are the keys of the object map,E.g 'Educational, Funny..'
                ...Object.keys(devTaskMap)
            ],
            datasets: [{
                data: [...Object.values(devTaskMap)],
                backgroundColor: bgColors,
                hoverBackgroundColor: hovColors

            }]
        };

    }

    render() {
        if (!this.state.board) return 'loading';
        const tPerDevloper = this.getTasksPerDevloperData()
        return (
            <section className="chart-cont">

                <article className="chart-1-1 flex column align-centery">
                    <h2>Task Per Devloper</h2>
                    <Doughnut data={tPerDevloper} />
                </article>
            </section>
        )
    }
}
