import { useEffect } from "react";
import { Route ,Switch} from 'react-router-dom';
import './App.css';
import AllMeetups from './pages/AllMeetups';
 import './index.css';
import Fav from './pages/Fav';
import NewMeetup from './pages/NewMeetup';
import MainNav from './components/layout/MainNav';
import Login from './Form/Login';
import Register from './Form/Register';
import { ProductConsumer } from "./components/Statemanagment/Contex";


function App() {
  return (
    <ProductConsumer>
      {(value) => {
        // const { GetUser_Login } = value;
        return (
    <div >

      <div>
         <MainNav  />

      </div>
     
       <div>
          <Switch>
      <Route path='/' exact={true}>
       <AllMeetups/>
       
      </Route>

      <Route path='/new' >
       
       <NewMeetup />
      </Route>
      <Route path='/login' >
       
       <Login />
      </Route>
      <Route path='/register' >
       
       <Register />
      </Route>
     <Route path='/fav'> <Fav/> </Route>

     </Switch>
       </div>
    </div>
       );
      }}
    </ProductConsumer>
  );
}

export default App;
