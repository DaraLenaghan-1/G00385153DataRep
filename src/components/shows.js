import React from "react";
import {showStorage} from './showStorage';

export class Shows extends React.Component{
    render(){
        return this.props.shows.map(
            (show)=>{
                return <showStorage show={show} key={show._id} Reload={this.props.Reload}></showStorage>
            }
        );
    }
}