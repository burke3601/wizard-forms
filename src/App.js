
import WizardForm from './compnents/WizardForm'

function App() {
  return (
    <div>
      <WizardForm 
      title="Add New Wizard"
      onSubmit={(wizard) =>{
        console.log('__________________________')
        console.log('here is the new wizard')
        console.log(wizard)
      }} />
    </div>
  );
}

export default App;
