import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersListContainer from './components/UsersList/UsersListContainer';

function App() {
  
  return (
    <div className="container">
      <div className="container__sidebar">
        <Sidebar />
      </div>
      <div className="container__pages">
        <Routes>
          <Route path="/" element={<UsersListContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
