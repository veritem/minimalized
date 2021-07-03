import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Minimalized } from '../src/index';
import { useState } from 'react';

const App = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <section>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Minimalized open={open} close={() => setIsOpen(!open)}>
        <h1>HI</h1>
      </Minimalized>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
