
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError();
    
    
  return (
    <div>{isRouteErrorResponse(error)?'Invalid page':'unexpected error'}</div>
  )
}

export default ErrorPage