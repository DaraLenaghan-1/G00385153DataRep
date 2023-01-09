import React from "react";
import { Show } from "./show";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Library extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this); //binds
    }

    componentDidMount() {
        //read JSON data from the Node/Express server
        axios.get('http://localhost:4000/api/show')
            .then((response) => {
                this.setState({ show: response.data }) //set show data 
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //refresh data from the server
    ReloadData() {
        axios.get('http://localhost:4000/api/show')
            .then((response) => {
                this.setState({ show: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        show: []
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3>Here is all our Show contributed</h3>
                            <center>
                                <Show show={this.state.show} ReloadData={this.ReloadData}></Show>
                            </center>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}