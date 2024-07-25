import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/body/Sidebar'
import Notes from './Components/Notes/Notes';
import Reminders from './Components/Reminders/Reminders';
import Archive from './Components/Archive/Archive';
import Trash from './Components/Trash/Trash';
import Header from './Components/Header/Header';
import CreateNote from './Components/CreateNote/CreateNote';
import LoginForm from './Components/LoginForm/LoginForm';
import SignInForm from './Components/SignInForm/SignInForm';
import CombineComponets from './Components/CombineComponets/CombineComponets';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<SignInForm/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/combine' element={<CombineComponets/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>

    </>
  );
};

export default App;