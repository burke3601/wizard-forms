import { useState } from 'react';
import WizardForm from './compnents/WizardForm';
import WizardList from './compnents/WizardList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [wizards, setWizards] = useState([]);
  const [wizardToEdit, setWizardToEdit] = useState({})

  const chooseWizard = (wizard) => {
    console.log(`App sees ${wizard.name}`);
    setWizardToEdit(wizard);
  }



  const onSubmit = (wizard) => {
    console.log('==============================');
    console.log('here is the new wizard');
    //console.log(wizard);

    if (wizard.id) {
      //const existingWizard = wizards.find(w => w.id === wizard.id)

      const updatedWizards = wizards.map(w => {
        //if same wizard (same id) return the wizard from th form
        //othersie return the wizard from the loop
        if (w.id === wizard.id){
          return wizard
        } else {
          return w;
        }
      });
      setWizards(updatedWizards)

    } else {

    //stamp it with a UUID
    wizard.id = uuidv4();


    // how do we .push() into a state variable????
    // why not .push? because that changes the variable
    // To _correctly_ setState on an Array:
    const newWizardArray = [
      ...wizards, // copy the existing elements from the OLD array
      wizard      // include the element
    ];
    // ask React to store the new array as the wizards
    setWizards(newWizardArray);
    // setWizards([
    //   ...wizards,
    //   wizard
    // ]);
    
  }
}

  return (
    <div>
      <WizardForm 
      title="Add New Wizard"
      onSubmit={onSubmit}
      wizard={wizardToEdit}
      />
      <WizardList 
        wizards={wizards}
        chooseWizard={chooseWizard}
      />
    </div>
  );
}

export default App;
