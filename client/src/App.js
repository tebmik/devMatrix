import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';

// Redux
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Route exact path='/' component={Landing} />

                    <section
                        className='container'
                        style={{ position: 'relative' }}
                    >
                        <Alert />
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <Route
                                exact
                                path='/register'
                                component={Register}
                            />
                            <Route
                                exact
                                path='/profiles'
                                component={Profiles}
                            />
                            <Route
                                exact
                                path='/profile/:id'
                                component={Profile}
                            />
                            <PrivateRoute
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            />
                            <PrivateRoute
                                exact
                                path='/create-profile'
                                component={CreateProfile}
                            />
                            <PrivateRoute
                                exact
                                path='/edit-profile'
                                component={EditProfile}
                            />
                            <PrivateRoute
                                exact
                                path='/add-experience'
                                component={AddExperience}
                            />
                            <PrivateRoute
                                exact
                                path='/add-education'
                                component={AddEducation}
                            />
                            <PrivateRoute
                                exact
                                path='/posts'
                                component={Posts}
                            />
                        </Switch>
                    </section>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;
