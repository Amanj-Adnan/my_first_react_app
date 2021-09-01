import { Route ,Switch} from 'react-router-dom';
import './App.css';
import AllMeetups from './pages/AllMeetups';
 import './index.css';
import Fav from './pages/Fav';
import NewMeetup from './pages/NewMeetup';
import MainNav from './components/layout/MainNav';


function App() {
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
     
     <Route path='/fav'> <Fav/> </Route>

     </Switch>
       </div>
    </div>
  );
}

export default App;
