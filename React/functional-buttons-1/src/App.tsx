import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      
      <Button type="default" />
      <Button type="primary" />
      <Button type="dashed" />
      <Button type="text" />
      <Button type="link" />
    </div>
  );
}

export default App;
