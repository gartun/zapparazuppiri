import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children: Component, token, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            token ?
                <Redirect to="/docs" />
            : Component 
        )} />
    );
};

export default PublicRoute;