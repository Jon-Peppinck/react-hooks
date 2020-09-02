import React, { useReducer, Dispatch, SetStateAction } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation/Navigation';

import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';

interface UserContext {
  name: string;
  count: number;
  setCount: Dispatch<SetStateAction<any>>;
}

export const UserContext = React.createContext<UserContext>({
  name: '',
  count: 0,
  setCount: () => {},
});

function reducer(state: any, action: any) {
  switch (action) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [user, setCount] = useReducer(reducer, {
    name: 'Jon Peppinck',
    count: 261,
  });
  return (
    <UserContext.Provider
      value={{ name: user.name, count: user.count, setCount }}
    >
      <div>
        <Navigation />
        <Router>
          <div style={{ textAlign: 'center' }}>
            <ul
              style={{
                listStyle: 'none',
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: '#FFF',
                    backgroundColor: '#333',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '8px',
                  }}
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/other"
                  style={{
                    textDecoration: 'none',
                    color: '#FFF',
                    backgroundColor: '#333',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '8px',
                  }}
                >
                  Other Page
                </Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/">
                <Page1 />
              </Route>
              <Route path="/other">
                <Page2 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
