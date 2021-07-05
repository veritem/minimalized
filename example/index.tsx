/* import 'react-app-polyfill/ie11'; */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/minimalized.cjs.development.css';

import { Minimalized } from '../.';
import { useState } from 'react';

const App = () => {
  const [open, setIsOpen] = useState<boolean>(true);

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
