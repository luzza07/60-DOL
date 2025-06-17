import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const UserDetailPage = () => {
   const params= useParams();
  const [searchParams,setSearchParams]= useSearchParams();
  const location=useLocation();
  console.log(location);
  
  console.log(searchParams.get("age"));
  
   
  return (
    <div>User</div>
  )
}

export default UserDetailPage