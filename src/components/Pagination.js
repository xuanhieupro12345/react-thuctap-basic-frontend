import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample() {
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Last />
        </Pagination>
    );
}

export default AdvancedExample;