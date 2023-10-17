import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const newCoffee = { name, supplier, category, photo, quantity, taste, details }
        console.log(newCoffee)

        // send data to the server
        fetch('https://coffee-store-server-k3uttplr8-shuvos-projects-7bea5cfb.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully added💖💖',
                        text: 'you have added this coffee',
                        icon: 'success',
                        confirmButtonText: 'Go back'
                    })
                }

            })
    }

    return (
        <div className="max-w-7xl p-4 bg-[#F4F3F0] mx-auto text-center mt-10">
            <h3 className="text-4xl text-shadow font-primary mb-8">Add New Coffee</h3>
            <p className="font-secondary font-normal text-sm">A steaming cup of freshly brewed coffee, rich and aromatic, beckons with its alluring blend of earthy notes and<br /> roasted undertones.  With a tantalizing warmth that envelops the senses, each sip unveils a symphony of flavors,  <br />from bittersweet chocolate to hints of nutty caramel. </p>
            <form onSubmit={handleAddCoffee} className="mt-8 text-center mx-auto font-secondary">
                <div className="md:flex md:gap-8 justify-center">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Coffee name" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Enter coffee category" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available quantity" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Enter coffee details" className="input" />
                            </label>
                        </div>
                    </div>
                </div>
                <input className="btn font-primary font-normal hover:bg-[#947e61] border-[#331A15] hover:border-[#271310] text-2xl bg-[#D2B48C] text-[#331A15] md:w-2/5 w-4/5 mt-6" type="submit" value="Add Coffee" />
            </form>

        </div>
    );
};

export default AddCoffee;