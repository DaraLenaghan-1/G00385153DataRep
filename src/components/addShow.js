import React from "react";
import axios from "axios";

export class AddShow extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeShowName = this.onChangeShowName.bind(this);
        this.onChangeShowPic = this.onChangeShowPic.bind(this);
        this.onChangeShowDescription = this.onChangeShowDescription.bind(this);

        this.state = {
            ShowName: '',
            ShowPic: '',
            ShowDescription: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.ShowName},
        ${this.state.ShowPic},
        ${this.state.ShowDescription}`);

        const show = {
            ShowName: this.state.ShowName,
            ShowPic: this.state.ShowPic,
            ShowDescription: this.state.ShowDescription
        }

        axios.post('http://localhost:4000/api/shows', show)
            .then()
            .catch();

        this.setState({
            ShowName: '',
            ShowPic: '',
            ShowDescription: ''
        })
    }

    onChangeShowName(e) {
        this.setState({
            ShowName: e.target.value
        })
    }
    onChangeShowPic(e) {
        this.setState({
            ShowPic: e.target.value
        })
    }
    onChangeShowDescription(e) {
        this.setState({
            ShowDescription: e.target.value
        })
    }

    render() {
        return (
            <div>
                <br />
                <h3>Enter any show we dont have!</h3>
                <form onSubmit={this.handleSubmit}>
                    <br />

                    <div className="form-group">
                        <label>Add show Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.ShowName}
                            onChange={this.onChangeShowName}
                        />
                    </div>
                    <br />

                    <div className="form-group">
                        <font color="white"><label>Show Picture Url</label></font>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.ShowPic}
                            onChange={this.onChangeShowPic}
                        ></textarea>
                    </div>
                    <br />

                    <div className="form-group">
                        <label>Add show description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.ShowDescription}
                            onChange={this.onChangeShowDescription}
                        />
                    </div>

                    <br /><br />

                    <input type="submit" value="Add show" />
                </form>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            </div>
        );
    }
}