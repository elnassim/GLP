import React, { useState, useEffect } from "react";
import "./RequestsPage.css";
import Sidebar from '../Sidebar.jsx';


const RequestsPage = () => {
  const [requests, setRequests] = useState([]);

  // Simulated example data
  useEffect(() => {
    const fetchedRequests = [
      { id: 1, studentName: "Ali Ahmed", requestType: "Enrollment Certificate" },
      { id: 2, studentName: "Sara Lmoujahid", requestType: "Grade Transcript" },
      { id: 3, studentName: "Mohamed El Amrani", requestType: "Internship Certificate" },
    ];
    setRequests(fetchedRequests);
  }, []);

  
  return (
   
    <div className="requests-page">
         {<Sidebar/>}

      <h1 className="title">Student Requests</h1>

      {/* Requests Table */}
      <table className="requests-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Request Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.studentName}</td>
              <td>{request.requestType}</td>
              <td>
               <button 
    className="process-button" 
    onClick={() => window.location.href = '.'}
>
   Process
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsPage;