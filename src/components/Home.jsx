import React,{useEffect,useState} from 'react'
import Topbar from './Topbar';
import BlogCard from '../common/BlogCard';
import { toast } from 'react-toastify';
import { API_URL } from '../App';
import axios from 'axios';

function Home() {

  let [data,setData] = useState([])
  
  const getBlogs=async()=>{
    try {
      let res = await axios.get(API_URL)
      if(res.status===200)
      {
        toast.success('Blogs fetched Successfully!')

        setData(res.data.filter(e=>e.status))
      }
    } catch (error) {
        toast.error()
    }
  }

  useEffect(()=>{
    getBlogs()
  },[])
  return <><div className='container-fluid'>
    <Topbar/>
    <div className='previewWrapper'>
    {
      data.map((e)=>{
       
        return <BlogCard  name={e.name}
             username={e.username}
             email={e.email}
             address={e.address}
             phone={e.phone}
             website={e.website}
             company={e.company} key={e.id}/>
      })
    }
    </div>
  </div>
  </>
}

export default Home