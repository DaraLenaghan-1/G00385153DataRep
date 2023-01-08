import React from "react";
import {ShowStorage} from './showStorage';

export class Shows extends React.Component{
    render(){
        return this.props.shows.map(
            (show)=>{
                return <ShowStorage show={show} key={show._id} ReloadData={this.props.ReloadData}></ShowStorage>
            }
        );
    }
}