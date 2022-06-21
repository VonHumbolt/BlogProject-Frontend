import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children, user}) => {
    if (Object.keys(user).length === 0) {
        return <Navigate to="/login" />
    }
    return children
}

export default ProtectedRoute;