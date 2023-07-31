import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
export default function Create() {
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState('');
    const [done, setDone] = useState('');
    const postData = () => {
        if(!taskName ){
            window.alert("Incomplete Details")
            return;
        }
        axios.post(`https://63e889595f3e35d898f1cf26.mockapi.io/taskDetails`, {
            taskName,
        })
         setTaskName('')
         setDone(false)
        alert("Hello! Data added Successfully");
        navigate("/");
    }
    return (
        <div >
            <Form >
            <div class="form-group " >
                    <input type="text" placeholder='Task Name'  onChange={(e) => setTaskName(e.target.value)} value={taskName}/>
            </div>
                <Button onClick={postData}  type='submit'>Submit</Button>
            </Form>
        </div>
    )
    
}