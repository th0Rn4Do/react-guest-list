import './App.css';
import CheckboxControlledComponent from './CheckboxControlledComponent';
import FirstNameControlledComponent from './FirstNameControlledComponent';
import FullName from './FullName';
import LastNameControlledComponent from './LastNameControlledComponent';
import logo from './logo.svg';
import NamesList from './NamesList';

export default function App() {
  return (
    <div>
      <h2>Guest details</h2>
      <FirstNameControlledComponent />
      <br />
      <LastNameControlledComponent />
      <br />
      <CheckboxControlledComponent />
      <br />
      <FullName />
      <br />
      <NamesList />
      <br />
      <br />
      <h2>Guest list</h2>
      <br />
    </div>
  );
}
