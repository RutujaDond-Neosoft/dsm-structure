import React from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Typography from './components/Typography/Typography';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h1">Design System</Typography>
      <Input placeholder="Enter your name" />
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Primary Button
      </Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>
  );
}

export default App;