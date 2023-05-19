import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './components/modalAddNew'
import { useState } from 'react';

function App() {
  const [isshowModalAddNew, setishowModalAddNew] = useState(false)
  const handleClose = () => {
    setishowModalAddNew(false)
  }

  return (
    <div className='app-container'>
      <Header />

      <Container>
        <div className='my-3 add-new'>
          <span> <b>List Users</b> :</span>
          <button className="btn btn-success" onClick={() => setishowModalAddNew(true)}>add new users</button>
        </div>
        <TableUsers />
      </Container>

      <ModalAddNew
        show={isshowModalAddNew}
        handleClose={handleClose}
      />

    </div>
  );
}

export default App;
