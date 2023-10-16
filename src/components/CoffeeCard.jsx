import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { name, photo, quantity, supplier, taste, _id } = coffee || {};

    const handleDelete = _id => {
        console.log(_id)
        // sweet alert

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coff => coff._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <figure><img className="md:w-80 p-5" src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full items-center pr-4 ps-4 my-5">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions md:justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.protoTypes = {
    coffee: PropTypes.object
}