import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class ShowStorage extends React.Component {
    constructor() {
        super();
        this.DeleteShow = this.DeleteShow.bind(this);
    }
    DeleteShow(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/show/' + this.props.show._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }
    render() {
        if (!this.props || !this.props.show) return null;
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.show.ShowName} />{/* showpic */}
                    <Card.Body>
                        <Card.Title>{this.props.show.ShowPic}</Card.Title>{/* showname */}
                        <Card.Text>
                            {this.props.show.ShowDescription}{/* show description */}
                        </Card.Text>
                        <Link to={'/edit/' + this.props.show._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteShow}>Delete show</Button>
                    </Card.Body>
                </Card>
            </div>
        );

    }
}