
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const UserDetail = () => {
   const params= useParams();
  const [searchParams,setSearchParams]= useSearchParams();
  const location=useLocation();
  console.log(location);
  
  console.log(searchParams.get("age"));
  
   
  return (
    <div>user{params.id}</div>
  )
}

export default UserDetail