import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fecthAllUser } from '../services/UserServices';
// import image from './image';
// import AdvancedExample from '../components/Pagination'
import ReactPaginate from 'react-paginate';
import ModalAddNew from './modalAddNew'
import ModalEditUser from './modalEditUser';


const TableUsers = (props) => {

    //kiểm sát dữ liệu của thằng reactjj
    const [listUsers, setListUsers] = useState([])
    const [totalUsers, settotaUsers] = useState(0)
    const [totaPages, settotaPages] = useState(0)

    const [isshowModalAddNew, setishowModalAddNew] = useState(false)
    const [isShowModalEdit, setisShowModalEdit] = useState(false)
    const [dataUserEdit, setdataUserEdit] = useState({})

    const handleClose = () => {
        setishowModalAddNew(false)
        setisShowModalEdit(false)
    }

    const handleEditUesr = (user) => {
        console.log(user)
        setdataUserEdit(user);
        setisShowModalEdit(true);
    }

    const handleUptateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }
    //cánh gọi ipa
    useEffect(() => {
        // call 
        getUsers(1)
    }, [])

    const getUsers = async (page) => {
        let res = await fecthAllUser(page);
        console.log('check new res', res)
        if (res && res.data) {
            console.log("check res", res)
            setListUsers(res.data)
            settotaPages(res.total_pages)
        }
    }

    console.log(listUsers)
    // avatar:"https://reqres.in/img/faces/1-image.jpg"
    // email: "george.bluth@reqres.in"
    // first_name: "George"
    // id: 1
    // last_name: "Bluth"
    const handlePageClick = (event) => {
        console.log('check lab', event)
        getUsers(+event.selected + 1)
    }

    return (<>
        <div className='my-3 add-new'>
            <span> <b>List Users</b> :</span>
            <button className="btn btn-success" onClick={() => setishowModalAddNew(true)}>add new users</button>
        </div>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>Avatar</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 &&

                    listUsers.map((item, index) => {
                        return (
                            <tr key={`Users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.avatar}</td>
                                <td>
                                    <button
                                        className='btn btn-warning m-2'
                                        onClick={() => handleEditUesr(item)}
                                    >Edit</button>
                                    <button className='btn btn-danger'> Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>

        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totaPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />

        <ModalAddNew
            show={isshowModalAddNew}
            handleClose={handleClose}
            handleUptateTable={handleUptateTable}
        />

        <ModalEditUser
            show={isShowModalEdit}
            handleClose={handleClose}
            dataUserEdit={dataUserEdit}
        />
    </>)
}

export default TableUsers;