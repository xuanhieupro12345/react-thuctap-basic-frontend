import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalAddNew = (props) => {
    const { show, handleClose } = props;
    const [Name, setName] = useState("")
    const [Job, setJob] = useState("")

    const handleSaveUsers = () => {
        console.log('check state ', "name", Name, "job", Job)
    }
    return (

        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={Name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input type="text" className="form-control" value={Job} onChange={(event) => setJob(event.target.value)} />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUsers()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default ModalAddNew;