import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const createdAt = result?.user?.metadata?.creationTime
            const newUser = {name, email, createdAt}
            // save new user info database
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: "Success",
                        text: "User added successfully",
                        icon: "success"
                      });
                }
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br />
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>Dont any accout? <Link to='/signin'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;