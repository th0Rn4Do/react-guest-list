import './App.css';
import CheckboxControlledComponent from './CheckboxControlledComponent';
import FullName from './FullName';
import logo from './logo.svg';
import NamesList from './NamesList';
import FirstNameControlledComponent from './projectnotes/FirstNameControlledComponent';
import LastNameControlledComponent from './projectnotes/LastNameControlledComponent';

export default function App() {
  return (
    <div>
      <h2>New guest details</h2>
      <NamesList />
      <br />
      <h2>Guest list</h2>
      <br />
    </div>
  );
}
