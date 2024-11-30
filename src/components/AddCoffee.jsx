import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};

        // send data load
        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a coffee</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <div className='form-control md:w-1/2 mr-4'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' placeholder='Coffee Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='quantity' placeholder='Available Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                <div className='flex'>
                    <div className='form-control md:w-1/2 mr-4'>
                        <label className='label'>
                            <span className='label-text'>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier' placeholder='Supplier' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste' placeholder='Taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                <div className='flex'>
                    <div className='form-control md:w-1/2 mr-4'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='category' placeholder='Category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details' placeholder='Details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>

                <div>
                    <div className='form-control md:w-full mb-4'>
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='photo' placeholder='Photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffee;