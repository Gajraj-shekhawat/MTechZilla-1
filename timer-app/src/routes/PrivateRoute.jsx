import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
  const status=useSelector(store=>store.auth.status)
  if(status){

    return children
  }
  return <Navigate to={"/login"}/>
}

export default PrivateRoute