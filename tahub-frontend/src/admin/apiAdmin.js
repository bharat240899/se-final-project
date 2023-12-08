import {API} from '../config';

export const createCategory =(userId,token,category)=>{
    //console.log(name,email,password)
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response =>{ 
        return response.json()
    })
    .catch(err =>{
        console.log(err);
    })

};
export const createJob =(userId,token,job)=>{
    //console.log(name,email,password)
    return fetch(`${API}/job/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            Authorization:`Bearer ${token}`
        },
        body:job
    })
    .then(response =>{ 
        return response.json()
    })
    .catch(err =>{
        console.log(err);
    });

};


export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getPostings = () => {
    return fetch(`${API}/postings?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const deletePosting = (jobId, userId, token) => {
    return fetch(`${API}/job/${jobId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getPosting = jobId => {
    return fetch(`${API}/postings/${jobId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updatePostings= (jobId, userId, token, product) => {
    return fetch(`${API}/job/${jobId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
