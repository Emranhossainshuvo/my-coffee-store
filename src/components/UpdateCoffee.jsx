import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { name, photo, quantity, category, supplier, taste, details, _id } = coffee || {};

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const updatedCoffee = { name, supplier, category, photo, quantity, taste, details }
        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully updated💖💖',
                        text: 'you have Updated this coffee',
                        icon: 'success',
                        confirmButtonText: 'Go back'
                    })
                }

            })
    }


    return (
        <div className="max-w-7xl p-4 bg-[#F4F3F0] mx-auto text-center mt-10">
            <h3 className="text-4xl text-shadow font-primary mb-8">Update Coffee: {name}</h3>
            <form onSubmit={handleUpdateCoffee} className="mt-8 text-center mx-auto font-secondary">
                <div className="md:flex md:gap-8 justify-center">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={name} name="name" placeholder="Coffee name" className="input text-xs" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={supplier} name="supplier" placeholder="Enter coffee supplier" className="input text-xs" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={category} name="category" placeholder="Enter coffee category" className="input text-xs" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={photo} name="photo" placeholder="Enter photo URL" className="input text-xs" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={quantity} name="quantity" placeholder="Available quantity" className="input text-xs" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={taste} name="taste" placeholder="Enter coffee taste" className="input text-xs" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={details} name="details" placeholder="Enter coffee details" className="input text-xs" />
                            </label>
                        </div>
                    </div>
                </div>
                <input className="btn font-primary font-normal hover:bg-[#947e61] border-[#331A15] hover:border-[#271310] text-2xl bg-[#D2B48C] text-[#331A15] md:w-2/5 w-4/5 mt-6" type="submit" value="Update Coffee" />
            </form>

        </div>
    );
};

export default UpdateCoffee;