import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Update() {

    const navigate = useNavigate();
    let location = useLocation();

    const [id, setId] = useState(location.state.payload.id);
    const [taskName, setTaskName] = useState(location.state.payload.taskName);
    const [done, setDone] = useState(location.state.payload.done);
    const UpdateTask = () => {
        if(!taskName ){
            window.alert("Incomplete Details")
            return;
        }

        const payload = {}
        payload.id = id;
        payload.taskName = taskName;
        payload.done = done;

        axios.put(`https://63e889595f3e35d898f1cf26.mockapi.io/taskDetails/${location.state.payload.id}`, payload)
        .then(() => {
            navigate(-1);
        })
    
        alert("Hello! Data added Successfully");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    <input type="text" placeholder='ID'  onChange={(e) => setId(e.target.value)} value={location.state.payload.id}/>
            </div>
            <div class="form-group " >
                    <input type="text" placeholder='Task Name'  onChange={(e) => setTaskName(e.target.value)} defaultValue={location.state.payload.taskName}/>
            </div>  
            <div class="form-group " >
                    <input type="radio" id="yes" name="fav_language"onChange={(e) => setDone(e.target.value)} value="true"/>
                    <label for="yes">Completed</label>
                    <input type="radio" id="no" name="fav_language" onChange={(e) => setDone(e.target.value)} value="false"/>
                    <label for="no">Not Completed</label>
            </div>  

                <Button onClick={UpdateTask}>Submit</Button>
            
            </Form>
        </div>
    )
    
}

