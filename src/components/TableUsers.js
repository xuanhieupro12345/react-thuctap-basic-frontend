import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fecthAllUser } from '../services/UserServices';
// import image from './image';
// import AdvancedExample from '../components/Pagination'
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {

    //kiểm sát dữ liệu của thằng reactjj
    const [listUsers, setListUsers] = useState([])
    const [totalUsers, settotaUsers] = useState(0)
    const [totaPages, settotaPages] = useState(0)

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

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>Avatar</th>
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

        {/* <div>
            <AdvancedExample />
        </div> */}

    </>)
}

export default TableUsers;