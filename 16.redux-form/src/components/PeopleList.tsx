import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux';
import * as MyTypes from "MyTypes";
import { actionTypes } from '../actions/Actions';
import { Dispatch } from "redux";

interface IPeopleListProps {
    count: number;
    peopleList: string[];
    addPeople: (item: string) => object,
    deletePeople: (idx: number) => object;
  }

class PeopleList extends Component<IPeopleListProps, {}> {
    handleDelete = (idx: number) => {
        console.log("deleting", idx);
        this.props.deletePeople(idx);
    };

    render() {
        let peopleJSX: JSX.Element[] | JSX.Element;
        if (!this.props.peopleList.length) {
            peopleJSX = <tr><td colSpan={2}>No active todos.</td></tr>;
        } else {
            peopleJSX = this.props.peopleList.map((item, idx) => {
                return (
                    <tr key={item}>
                        <td>{item}</td>
                        <td><button onClick={() => this.handleDelete(idx)}>Delete</button></td>
                    </tr>
                );
            });
        }

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleJSX}
                </tbody>
            </Table>
        )
    }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
    return {
        count: store.people.count,
        peopleList: store.people.list
    };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
    addPeople: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
    deletePeople: (idx: number) => dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(
    MapStateToProps,
    MapDispatchToProps
  )(PeopleList);