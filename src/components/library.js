import React from "react";
import { Shows } from "./shows";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Library extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/shows')
            .then((response) => {
                this.setState({ shows: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        shows: []
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3>Here is all our Show contributed</h3>
                            <center>
                                <Shows shows={this.state.shows} Reload={this.componentDidMount}></Shows>
                            </center>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}