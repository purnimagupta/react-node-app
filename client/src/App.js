// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout';
import NewsItemDetail from './components/presentation/NewsItemDetail';
import { Provider } from 'react-redux';
import store from './stores/store';
import NewsArticle from './components/containers/NewsArticle';
import NewsSubmit from './components/containers/NewsSubmit'
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            {/* <Layout> */}
              <Switch>
                <Layout>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  {/* <Route path='/news/:id' component={NewsItemDetail}/> */}
                  <Route path='/news/:id' component={NewsArticle}/> 
                  <Route path='/submit' component={NewsSubmit}/>   
                </Layout>
              </Switch>
            {/* </Layout> */}
        </BrowserRouter>
        </Provider>
       );
  }
}

export default App;