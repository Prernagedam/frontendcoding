import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { sender } from '../../Store';
import Heading from '../../Heading/Heading';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    let { mode } = useContext(sender)


    let { register, handleSubmit, formState: { errors }, reset } = useForm()

    let Submit = (data, e) => {
        e.preventDefault()
        axios.post("https://portfolio-90cd8-default-rtdb.firebaseio.com/contact.json", data)
        reset()
    }
    let info = [

        {
            id: 3,
            title: "Email",
            data: "prernagedam0721@gmail.com"
        },
        {
            id: 4,
            title: "Phone",
            data: "+91-7028612348"
        }
    ]

    return (
        <>

            <div className={`container-fluid pt-5 pt-lg-0 bg-${mode ? 'dark' : 'light'}`} id='contact'>
                <Heading name="Contact" />
                <div className="row contact align-items-center ">
                    <div className="col-lg-6" data-aos="zoom-in-right">
                        <img src="images/istockphoto-1343972616-170667a.jpg" alt="" width="100%" class="img-thumbnail border border-5 border border-dark" />
                        <br />
                        <h5 style={{ fontFamily: 'serif', color: "brown" }}>Email-prernagedam0721@gmail.com</h5>
                        <h5 style={{ fontFamily: 'serif', color: "brown" }}>+91-7028612348</h5>
                    </div>
                    <div className="col-lg-6" data-aos="zoom-in-right">
                        <form action="" onSubmit={handleSubmit(Submit)} className='p-3 shadow'>
                            <label htmlFor="" className='form-label fw-bolder' style={{ color: ' grey', fontFamily: "serif" }}>Enter Name</label>
                            <input {...register("Name", { required: "this field is required!" })} type="text" className='form-control' />
                            <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Name?.message}</p>
                            <label htmlFor="" className='form-label fw-bolder' style={{ color: ' grey', fontFamily: "serif" }}>Enter Email</label>
                            <input {...register("Email", { required: "this field is required!" })} type="email" className='form-control' />
                            <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Email?.message}</p>
                            <label htmlFor="" className='form-label fw-bolder' style={{ color: 'grey', fontFamily: "serif" }}>Enter Phone</label>
                            <input {...register("Phone", { required: "this field is required!", minLength: { value: 10, message: "min 10 digits required!" }, maxLength: { value: 10, message: "max 10 digits required!" } })} type="number" className='form-control' />
                            <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Phone?.message}</p>
                            <label htmlFor="" className='form-label fw-bolder' style={{ color: ' grey', fontFamily: "serif" }}>Any Query</label>
                            <input {...register("Query", { required: "this field is required!" })} type="text" className='form-control' />
                            <p className='fw-bolder' style={{ color: '#E11845' }}>{errors.Query?.message}</p>
                            <input className='btn btn-outline-danger bg-warning' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact