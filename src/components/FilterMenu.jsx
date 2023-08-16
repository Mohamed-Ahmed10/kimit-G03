import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function FilterMenu({ categories, selectedCategory, getProducts, children, filterProducts }) {
    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                title={selectedCategory}
                id="bg-vertical-dropdown-1"
                className="m-4"
                >
                <Dropdown.Item onClick={getProducts}>All</Dropdown.Item>
                {
                    categories.map((category, index) =>
                        <Dropdown.Item onClick={() => filterProducts(category)} key={index}>{category}</Dropdown.Item>
                    )
                }
            </DropdownButton></>
    )
}
