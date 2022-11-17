import React, {useEffect, useState} from "react";
import "./SchedulePage.css";
import ScheduleList from "../ScheduleList";

const SchedulePage = () => {
  const [subjects, setSubjects] = useState([])
  const [value, setValue] = useState('')

  // useEffect(() => {
  //   fetch('/api/subjects')
  //       .then(response => response.json())
  //       .then(data => setSubjects(data))
  // }, [])

  const fetchAllSubjects = () => {
    fetch('/api/subjects')
        .then(response => response.json())
        .then(data => setSubjects(data))
  }

  useEffect(() => fetchAllSubjects, [])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const addNewSubject = (e) => {
    e.preventDefault()
    fetch('/api/subjects',{
      method: 'POST',
      body: JSON.stringify({value}),
      headers: {
        'Content-type': 'application/json'
      }
    })
        .then(res => res.json())
        .then(() => fetchAllSubjects())
    setValue('')
  }

  return <div className="schedule">
    <h2>Розклад</h2>
    <form onSubmit={addNewSubject}>
      <input type="text" value={value} onChange={handleChange}/>
      <input type="submit" value='Click'/>
    </form>
    <ScheduleList subjects={subjects}/>
  </div>;
};

export default SchedulePage;
