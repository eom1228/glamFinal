import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UsersContextProvider } from './contexts/UsersContext';
import Header from './components/header';
import MainPage from './pages/mainPage';
import ProfilePage from './pages/profilePage';
import Footer from './components/footer';
// import './_sticky-footer.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <UsersContextProvider>
          <div className="App">
            {/* <div className="siteContent"> */}
            {/* <div className="header"> */}
            <Header />
            {/* </div> */}
            <Switch>
              <div className="pages">
                <Route exact path="/" component={MainPage} />
                <Route path="/myProfile" component={ProfilePage} />
              </div>
              {/* <MainPage />
        <ProfilePage /> */}
            </Switch>
            {/* </div> */}
            <Footer />
          </div>
        </UsersContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
