import RegisterForm from './components/Register/Register';
import Header from './components/Header/Header';
import LoginForm from './components/Login/Login';
import EditProfileForm from './components/EditProfile/EditProfileForm';
import TodosPages from './components/Todos/TodosPages';

import { Routes, Route, Navigate } from 'react-router-dom';

import './normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { EDIT_PROFILE_PAGE, LOGIN_PAGE, REGISTER_PAGE, TODOs } from './path/path';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={localStorage.getItem("user") ? <Navigate to={TODOs}/> : <Navigate to={LOGIN_PAGE}/>}/>
        <Route path={LOGIN_PAGE} element={<LoginForm />}/>
        <Route path={REGISTER_PAGE} element={<RegisterForm />}/>
        <Route path={EDIT_PROFILE_PAGE} element={<EditProfileForm />}/>
        <Route path={TODOs} element={<TodosPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
