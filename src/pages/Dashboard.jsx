import React, { Component } from 'react'
import { Doughnut, Bar, Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { loadBoard, } from '../store/actions/boardActions';

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


class _Dashboard extends Component {


    componentDidMount() {
        this.getBoardById();


    }
    getBoardById = async () => {
        const id = this.props.match.params.id;
        await this.props.loadBoard(id);
    }

    getSprintProgress = () => {

        const { board } = this.props;
        var getSprintProgressMap = {};
        board.phaseLists.forEach(phase => {
            phase.cards.forEach(card => {
                card.checkList.forEach(checkListItem => {
                    if (checkListItem.isDone) {
                        (!getSprintProgressMap["Completd"]) ? getSprintProgressMap["Completd"] = 1 : getSprintProgressMap["Completd"] += 1;
                    } else {
                        (!getSprintProgressMap["In Progress"]) ? getSprintProgressMap["In Progress"] = 1 : getSprintProgressMap["In Progress"] += 1;
                    }
                })
            })
        });

        return {

            labels: [
                //the labels are the keys of the object map,E.g 'Educational, Funny..'
                ...Object.keys(getSprintProgressMap)
            ],
            datasets: [{
                label: "Sprint Progress",
                data: [...Object.values(getSprintProgressMap)],
                backgroundColor: bgColors,
                hoverBackgroundColor: hovColors

            }]
        };
    }

    getTaskPerPhaseDistribution = () => {
        const { board } = this.props;
        var phaseTaskMap = {};
        board.phaseLists.forEach(phase => {
            phase.cards.forEach(card => {

                (!phaseTaskMap[phase]) ? phaseTaskMap[phase.name] = 1 : phaseTaskMap[phase.name] += 1;

            })
        });

        return {

            labels: [

                ...Object.keys(phaseTaskMap)
            ],
            datasets: [{
                label: "Task Per Phase Distribution",
                data: [...Object.values(phaseTaskMap)],
                backgroundColor: bgColors,
                hoverBackgroundColor: hovColors

            }]
        };
    }
    getTaskByLables = () => {
        const { board } = this.props;
        var devTaskMap = {};
        board.phaseLists.forEach(phase => {
            phase.cards.forEach(card => {
                card.labels.forEach(label => {
                    (!devTaskMap[label.txt]) ? devTaskMap[label.txt] = 1 : devTaskMap[label.txt] += 1;
                })
            })
        });

        return {

            labels: [
                //the labels are the keys of the object map,E.g 'Educational, Funny..'
                ...Object.keys(devTaskMap)
            ],
            datasets: [{
                label: "Tasks by Labels",
                data: [...Object.values(devTaskMap)],
                backgroundColor: bgColors,
                hoverBackgroundColor: hovColors

            }]
        };
    }

    getTasksPerDevloperData() {

        const { board } = this.props;
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
                label: "Task Per Devloper",
                data: [...Object.values(devTaskMap)],
                backgroundColor: bgColors,
                hoverBackgroundColor: hovColors

            }]
        };

    }

    render() {
        if (!this.props.board) return 'loading';
        const tPerDevloper = this.getTasksPerDevloperData();
        const taskPerPhaseDistribution = this.getTaskPerPhaseDistribution();
        const tasksByLabels = this.getTaskByLables()
        const sprintProgress = this.getSprintProgress();
        return (
            <section className="chart-cont">

                <article className="flex column align-centery">
                    <Bar data={tPerDevloper} options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }} />
                </article>
                <article className="flex column align-centery">
                    <Doughnut data={taskPerPhaseDistribution} />
                </article>
                <article className="flex column align-centery">
                    <Bar data={tasksByLabels} options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }} />
                </article>
                <article className="flex column align-centery">
                    <h2>Sprint Progress by cheklist Items</h2>
                    <Pie data={sprintProgress} />
                </article>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    loadBoard
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)
