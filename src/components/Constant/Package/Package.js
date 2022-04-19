import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import Spinner from '../../Shared/Spinner/Spinner';
import './Package.css'
import useAuth from '../../../hooks/useAuth';

const Package = () => {


    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [packageData, setPackageData] = useState(null);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        setLoading(true);
        fetch(`/packages.JSON`)
            .then(res => res.json())
            .then(data => {
                setPackageData(data.find(item => item.id === id));
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return (
            <Spinner />
        )
    }

    const onsubmit = (data) => {
        reset();
        console.log(data);
        navigate(`/checkout/${id}`);
    }


    return (
        <div className="page">
            <div className="package__container">
                <div className="package__details">
                    <div className="package__details__image">
                        <img src={packageData.img} alt={packageData.name} />
                    </div>
                    <div className="package__details__info">
                        <h1>{packageData.name}</h1>
                        <p>{packageData.description}</p>
                        <h2>Price : <span>{packageData.price}$</span></h2>
                    </div>
                </div>

                <div className="package__form">
                    <h1>Book This Package</h1>

                    <form onSubmit={handleSubmit(onsubmit)}>
                        <input {...register("name")} placeholder="Name" defaultValue={user.displayName} />
                        <input {...register("author")} placeholder="Email" defaultValue={user.email} />
                        <input {...register("address")} placeholder="Address" />
                        <input type="number" {...register("phone")} placeholder="Phone" />
                        <input type="submit" value="Checkout" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Package;