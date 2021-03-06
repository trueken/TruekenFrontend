import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import Layout from "./Layout";


const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
	  loader: () => import('./routes/About'),
	  loading: Loading,
	});

const Vender = Loadable({
	  loader: () => import('./routes/Vender'),
	  loading: Loading,
	});

const Comprar = Loadable({
	  loader: () => import('./routes/Comprar'),
	  loading: Loading,
	});

class App extends Component {
  render() {
    return (
    <HashRouter>
      <Layout>
	        <Switch>
		      <Route exact path="/" component={Home}/>
		      <Route path="/about" component={About}/>
		      <Route path="/vender" component={Vender}/>
		      <Route path="/comprar" component={Comprar}/>
		    </Switch>
		  
	  </Layout>
	</HashRouter>
      
    );
  }
}

export default App;
