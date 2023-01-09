import React from "react";
import {ShowStorage} from './showStorage';

export class Show extends React.Component{
    render(){
        //gets show
        //refresh data
        return this.props.show.map(
            (show)=>{
                return <ShowStorage show={show} key={show._id} ReloadData={this.props.ReloadData}></ShowStorage>
            }
        );
    }
}