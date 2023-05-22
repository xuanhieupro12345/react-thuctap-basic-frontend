import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../services/UserServices';
import { toast } from 'react-toastify';


const ModalAddNew = (props) => {
    const { show, handleClose, handleUptateTable } = props;
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleSaveUsers = async () => {
        let res = await postCreateUser(name, job)
        if (res && res.id) {
            handleClose();
            setName('');
            setJob('');
            toast.success("a users is create succeed")
            handleUptateTable({ first_name: name, id: res.id })
            //success 
        } else {
            toast.error('an error....')
            //error
        }
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
                    <Button variant="primary" onClick={() => handleSaveUsers()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default ModalAddNew;