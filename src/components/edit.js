import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit() {
    let { id } = useParams();
    const [ShowName, setShowName] = useState('');
    const [ShowPic, setShowPic] = useState('');
    const [ShowDescription, setShowDescription] = useState('');

    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        //reads record to database
        axios.get('http://localhost:4000/api/show/' + id)
            .then((response) => {
                setShowName(response.data.ShowName);
                setShowPic(response.data.ShowPic);
                setShowDescription(response.data.ShowDescription);
            })
            .catch()
    }, []);

    //execute event when submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //define edit show object 
        const editShow = {
            ShowName: ShowName,
            ShowPic: ShowPic,
            ShowDescription: ShowDescription
        }

        axios.put('http://localhost:4000/api/show/' + id, editShow)
            .then()
            .catch();
    }

    return (
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Show Name: </label>
                    <input type="text"
                        className="form-control"
                        value={ShowName}
                        onChange={(e) => { setShowName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Show Pic: </label>
                    <input type="text"
                        className="form-control"
                        value={ShowPic}
                        onChange={(e) => { setShowPic(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Show description: </label>
                    <input type="text"
                        className="form-control"
                        value={ShowDescription}
                        onChange={(e) => { setShowDescription(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Edit Show"></input>
            </form>
        </div>
    );
}