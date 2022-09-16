import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import CallData from './CallData.js';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <CallData/>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
