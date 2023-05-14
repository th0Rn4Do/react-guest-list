import './App.css';
import { Fragment } from 'react';
import NamesList from './NamesList';

export default function App() {
  return (
    <>
      <div>
        <h2>New guest details</h2>
      </div>
      <div>
        <NamesList />
        <br />
      </div>
    </>
  );
}
