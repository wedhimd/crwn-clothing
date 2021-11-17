import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import LoginAndLogoutPage from './pages/login-and-logout/login-and-logout';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={LoginAndLogoutPage} />
      </Switch>
    </div>
  );
}
export default App;
