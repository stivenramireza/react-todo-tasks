import React, { Component } from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

import _ from 'lodash';
export default class TodoList extends Component {

    constructor(){
        super();
    }

    renderItems() {
        const props = _.omit(
            this.props,
            'todos'
        )
        return (
            _.map(this.props.todos, (todo, index) => {
                return(
                    <TodoListItem 
                        key={index} 
                        {...todo}
                        {...props}
                    />
                )
            })
        )
    }

    render() {
        return (
            <table>
                <TodoListHeader />

                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }

}