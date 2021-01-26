import { useState } from 'react';
import WizardForm from './compnents/WizardForm';

function App() {

  const [wizards, setWizards] = useState([]);


  return (
    <div>
      <WizardForm 
      title="Add New Wizard"
      onSubmit={(wizard) =>{
        console.log('__________________________');
        console.log('here is the new wizard');
        console.log(wizard);
        // how do we .push() into a state variable?
        // why not .push? b/c that changes the variable
        // to _correctly_ setState on an array:
        const newWizardArray = [
          ...wizards,
          wizard
        ];
        setWizards(newWizardArray);
        // setWizards([
        //   ...wizards,
        //   wizard
        // ])
      }} />
      <ul>
        
        {
          wizards.map(w => <li key={w.name}>{w.name}: {w.occupation} - {w.house}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
