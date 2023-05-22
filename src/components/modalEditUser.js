import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../services/UserServices';
import { toast } from 'react-toastify';


const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit } = props;
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleEditUsers = () => {

    }

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name)
        }
    }, [dataUserEdit])

    console.log(">>> check props", dataUserEdit)
    return (

        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input type="text" className="form-control" value={job} onChange={(event) => setJob(event.target.value)} />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUsers()}>
                        confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default ModalEditUser;