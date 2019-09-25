import React,{ Component } from 'react';
import CategoryTabs from './components/CategoryTabs';
import Heading from './components/Heading';
import Product from './components/Product';
import './App.css'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Heading/>
        <CategoryTabs />
          <Product />
            
      </div>
    );
  }
}

export default App;
