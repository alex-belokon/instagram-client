import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes'
import Main from './pages/Main/Main';


const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading ...</p>}>
                <Switch>
                    <Route path={ROUTES.LOGIN} component={Login} />
                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    {/* <Route exact path='/' render={() =><h1>Home</h1>}/> */}
                    {/* <Route exact path='/exp' render={() =><h1>Exp</h1>}/> */}            
                    <Main/>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;