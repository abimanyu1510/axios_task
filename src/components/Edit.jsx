import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlogCard from '../common/BlogCard';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Topbar from './Topbar';
function Edit() {

  let {id} = useParams()

  
  let [name,setName] = useState("")
  let[username,setUsername]=useState("")
  let[email,setEmail]=useState("")
  let[address,setAddress]=useState("")
  let[phone,setPhone]=useState("")
  let[website,setWebsite]=useState("")
  let[company,setCompany]=useState("")
  let navigate = useNavigate()

  const handleEdit = async()=>{
    try {
      let data = {name,username,email,address,phone,website,company,status:false}
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status===200)
      {
        toast.success("Blog Edited Successfully")
        navigate('/dashboard')
      }

    } catch (error) {
      
    }
  }

  const getBlogById = async()=>{
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200)
      {
        setName(res.data.name)
        setUsername(res.data.username)
        setEmail(res.data.email)
        setAddress(res.data.address)
        setPhone(res.data.phone)
        setWebsite(res.data.website)
        setCompany(res.data.company)
       
      }
    } catch (error) {
        toast.error("Internal Server Error")
    }
  }

  useEffect(()=>{
    getBlogById()
  },[])

  return <div className='container-fluid'>
      <Topbar/>
      <div className='homeWrapper'>
      <div className='formWrapper'>
      <Form>

<Form.Group className="mb-3">
  <Form.Label>name</Form.Label>
  <Form.Control  placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>username</Form.Label>
  <Form.Control  placeholder="name" onChange={(e)=>{setUsername(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>email</Form.Label>
  <Form.Control  placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>address</Form.Label>
  <Form.Control as="textarea" placeholder="address" onChange={(e)=>{setAddress(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>phone</Form.Label>
  <Form.Control  placeholder="phone" onChange={(e)=>{setPhone(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>website</Form.Label>
  <Form.Control  placeholder="website" onChange={(e)=>{setWebsite(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>company</Form.Label>
  <Form.Control placeholder="company" onChange={(e)=>{setCompany(e.target.value)}}/>
</Form.Group>

<Button variant="primary" onClick={()=>handleEdit()}>
  Submit
</Button>
</Form>
      </div>
      <div className='previewWrapper'>
        <h2 style={{textAlign:"center"}}>Preview</h2>
        <BlogCard
             name={name}
             username={username}
             email={email}
             address={address}
             phone={phone}
             website={website}
             company={company}
        />
      </div>
      </div>
  </div>
}

export default Edit