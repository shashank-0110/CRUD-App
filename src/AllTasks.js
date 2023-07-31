import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 
    function SmallExample() {
      const navigate=useNavigate()

        const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = async () =>{
            const response= await axios.get(`https://63e889595f3e35d898f1cf26.mockapi.io/taskDetails`)
              setData(response.data);        
        }
        getData();
        }, [])
  return (
    <div className='maindiv'>
      <div>
      <button type='button' className='addbutton' onClick={()=>handleCreate()} >Add Task</button>
      </div>
      <div>
    <Table  className='table' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Edit Task</th>
          <th>Delete Task</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
      {data.map((datas) => 
         (
        <tr>
          <td>{datas.taskName}</td>
          <td>
             <button type='button' className='edit' onClick={()=>handleUpdate(datas)} >EDIT</button>
          </td>
          <td>
             <button type='button' className='delete'  onClick={()=>handleDelete(datas.id)} >DELETE</button>
          </td>
          <td>{datas.done}</td>
        </tr>
        ))} 
      </tbody>
    </Table>
    </div>
    </div>
  );
  function handleDelete(id){
        const del = async () =>{
        const res = await axios.delete(`https://63e889595f3e35d898f1cf26.mockapi.io/taskDetails/`+id)
     }
     del();
     const updatedData = data.filter((d) => id !== d.id)
     setData(updatedData)
    
    }
    function handleUpdate(data){
      const payload = {}
      payload.id = data.id;
      payload.taskName = data.taskName;
      payload.done = data.Done;
      navigate("/Update",{
        state : {payload}
      }
      )
    }
    function handleCreate(){
      navigate("/Create")
    }

}

export default SmallExample;