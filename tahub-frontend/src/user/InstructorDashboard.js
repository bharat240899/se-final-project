import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';


const InstructorDashboard =() =>{

    const {user:{_id,name,email,role}} = isAuthenticated()
    const instructLinks =() => {
        return (
            <div className="card">
                <h4 className="card-header">Instructor Links</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link className="nav-link" to="/dashboard/evaluate">Evaluate TA Performance</Link>                 
                        </li>
                    </ul>
            </div>
        )
    };

    const instructInfo=() =>{
        return(
            <div className="card mb-5">
            <h3 className ="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item text-success">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">
                    {role ===2 ? 'Instructor' : 'Registerd User'}
                 </li>
            </ul>
        </div>
        )
    }

  



    return (
        <Layout title="Dashboard" description ={`Hello ${name}.Welcome!`} className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        {instructLinks()}
                    </div>
                    <div className="col-md-9">
                        {instructInfo()}
                       
                    </div>
                </div>

            
        </Layout>
    )
} 

export default InstructorDashboard;