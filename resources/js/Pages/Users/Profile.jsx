import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Base from '../../Layouts/Base'

export default function Profile(props) {
    const { auth } = usePage().props;

    const {data, setData, put, reset, errors} = useForm(
        { 
            email: auth.user.email ?? "",
            first_name: auth.user.first_name ?? "",
            last_name: auth.user.last_name ?? "",
            age: auth.user.age ?? "",
            location: auth.user.location ?? "",
            // not editable
            username: auth.user.username,
            address: auth.user.address
        }
    );

    const onChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    const onSubmit = (e) => {
        console.log("Data: ", data);
        e.preventDefault();
        put(route('users.update', auth.user.id), {
            data, 
            onSuccess: () => {
               console.log('yea!')
            }, 
        });
    }

    return (
        <>
            <div>
                <div className="card shadow-lg mx-4 my-3">
                    <div className="card-body p-3">
                        <div className="row gx-4">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src="/img/team-2.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                    {`${auth.user.first_name} ${auth.user.last_name}`}
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <form onSubmit={onSubmit}>

                                    {/* form header */}
                                    <div className="card-header pb-0">
                                        <div className="d-flex align-items-center">
                                            <p className="mb-0">Edit Profile</p>
                                            <button type='submit' className="btn btn-primary btn-sm ms-auto">Save</button>
                                        </div>
                                    </div>

                                    {/* form body */}
                                    <div className="card-body">                 
                                        <p className="text-uppercase text-sm">User Information</p>
                                        {/* Profile inputs */} 
                                        <div className="row">
                                            {/* Email address */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-control-label">Email address</label>
                                                    <input className="form-control" type="email" name='email' value={data.email} onChange={onChange} id="email" />
                                                </div>
                                            </div>
                                            {/* First Name */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="first-name" className="form-control-label">First Name</label>
                                                    <input className="form-control" type="text" name='first-name' value={data.first_name} onChange={onChange} id="first_name" />
                                                </div>
                                            </div>
                                            {/* Last Name */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="last-name" className="form-control-label">Last Name</label>
                                                    <input className="form-control" type="text" name='last-name' value={data.last_name} onChange={onChange} id="last_name" />
                                                </div>
                                            </div>
                                            {/* Age */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="age" className="form-control-label">Age</label>
                                                    <input className="form-control" type="text" name='age' value={data.age} onChange={onChange} id="age" />
                                                </div>
                                            </div>
                                            
                                            
                                            </div>
                                            <hr className="horizontal dark" />
                                            <p className="text-uppercase text-sm">Contact Information</p>
                                            <div className="row">
                                            {/* Address */}
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="address" className="form-control-label">Location</label>
                                                    <input className="form-control" type="text" name='address' value={data.address} onChange={onChange} id="address" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* 2nd Column */}
                        <div className="col-md-4">
                            <div className="card card-profile pb-7">
                                <img src="/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
                                <div className="row justify-content-center">
                                    <div className="col-4 col-lg-4 order-lg-2">
                                    <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                                        <a href="/">
                                            <img src="/img/team-2.jpg" className="rounded-circle img-fluid border border-2 border-white" />
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

Profile.layout = (page) => <Base children={page} title={"Profile"}/>

