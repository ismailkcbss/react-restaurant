import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';



export default function ProtectedRoute({ component: Component, ...rest }) {

    const userState = useSelector((state) => state.user);

    return (
        <Route {...rest} render={(props) => {
            if (userState.user.role === 'restaurant') {
                return <Component {...props} />
            } else {
                return <Redirect to={{ pathname: '/' }}/>
    }

        }}
        />
    )
}
