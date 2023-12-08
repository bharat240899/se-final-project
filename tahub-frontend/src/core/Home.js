import React ,{useState,useEffect} from 'react';
import Layout from './Layout'
import {getProducts} from './apiCore';
import Card  from './Card';
import Search from './Search';
import {Link,withRouter} from 'react-router-dom';
import { isAuthenticated } from '../auth';

 

const Home =() => {
    const [productsBySell,setProductsBySell] =useState([]);
    const [productsByArrival,setProductsByArrival] =useState([]);
    const [error,setError] =useState([false]);
    console.log(isAuthenticated());

    const loadProductsBySell =() =>{
        getProducts('sold').then(data =>{
            if(data.error){
                setError(data.error)
            }
            else{
                setProductsBySell(data)
            }
        });
    }

    const loadProductsByArrival =() =>{
        getProducts('createdAt').then(data =>{
            if(data.error){
                setError(data.error)
            }
            else{
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() =>{
        loadProductsByArrival();
        loadProductsBySell();
    },[]);

    return (
       
        <Layout 
                title="TA HUB" 
                description ="Welcome to North University TA Management System" className="container-fluid">
                    {/* <Search/>  */}
                                         
                    <h2 className="mb-4">Latest Postings</h2>
                     <div class="container mt-5 pt-4">
    <div class="row align-items-end  pb-2">
        <div class="col-md-8">
            <div class="section-title text-center text-md-start">
                <h4 class="title mb-4">Discover the Most Recent Teaching Assistant (TA) Opportunities for Your Preferred Courses</h4>
                <p class="text-muted mb-0 para-desc">Explore the most up-to-date TA openings available for the courses of your choice.</p>
            </div>
        </div> 

        {/* <div class="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
            <div class="text-center text-md-end">
                <a href="#" class="text-primary">View more Jobs <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right fea icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
        </div>  */}
    </div> 

    <div class="row mb-4 pb-4">
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Open</span>
                    <h5>Web Design</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-university" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted"> NU,Texas</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>
                    
                   <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="mt-3">
                    <Link className="btn btn-primary"  to="/signup">Apply now</Link>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Open</span>
                    <h5>Data Base and Data Mining</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-university" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted"> NU,Texas</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>
                    
                   <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="mt-3">
                    <Link className="btn btn-primary"  to="/signup">Apply now</Link>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Open</span>
                    <h5>Software Engineering</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-university" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted"> NU,Texas</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>
                    
                   <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="mt-3">
                    <Link className="btn btn-primary"  to="/signup">Apply now</Link>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Open</span>
                    <h5>Control Systems</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-university" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted"> NU,Texas</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>
                    
                   <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="mt-3">
                    <Link className="btn btn-primary"  to="/signup">Apply now</Link>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Open</span>
                    <h5>Analysis of Algorithms</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-university" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted"> NU,Texas</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>
                    
                   <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="mt-3">
                    <Link className="btn btn-primary"  to="/signup">Apply now</Link>
                    </div>
                </div>
            </div>
        </div> 
        
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Open</span>
                    <h5>Software Testing</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-university" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted"> NU,Texas</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>
                    
                   <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="mt-3">
                    <Link className="btn btn-primary"  to="/signup">Apply now</Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mt-4 pt-2 d-block d-md-none text-center">
            <a href="#" class="btn btn-primary">View more Jobs <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right fea icon-sm"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
    </div>
</div>
                     {/* <div className="row">
                        {productsByArrival.map((product,i) => (
                                     <div key={i} className="col-md-4 mb-3">

                                            <Card  product={product}/>
                                    </div>
                        ))}
                     </div>
                     <hr/>
                     <h2 className="mb-4">Best Sellers</h2>
                     <div className="row">
                    
                        {productsBySell.map((product,i) => (
                            <div key={i} className="col-md-4 mb-3">

                                <Card  product={product}/>
                            </div>
                        ))}
                     </div> */}       
        </Layout>
       
        
    );
    
    
}

export default Home;