import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onClick }) {
    return (
        <FaStar
            color={selected ? "red" : "grey"}
            size={30}
            onClick={onClick}
        />
    );
}

export default Star;