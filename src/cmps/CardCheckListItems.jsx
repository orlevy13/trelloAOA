
import React, { Component } from 'react'


export default function CardCheckListItems(props) {


    var readOnlyClass = (props.readOnly) ? 'divReadOnly' : '';
    var divClassName = `to-do-item flex space-between ${readOnlyClass}`;


    return (

        props.items.map((item) => {
            return <div className={divClassName} key={item.idx}>
                <div className="flex">
                    {item.txt === '' ? <img src="../../../../assets/img/add.svg" />
                        : <input type="checkbox" className="checkbox-todos" name="isDone" index={item.idx} checked={item.isDone} onChange={props.onHandleChange} />}
                    <input type="text" className="checkbox-txt" name="txt" placeholder="List item" value={item.txt} index={item.id} onChange={props.onHandleChange} />
                </div>
                <img className="todo-delete" src="../../../../assets/img/clear.svg" onClick={() => { props.onDeleteItem(item.idx) }} />
            </div>
        })
    )
}