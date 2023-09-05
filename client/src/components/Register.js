import React from 'react'
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label> name</label>
          <input
            type="text"
            className="form-control"
            placeholder=" name"
            {...register("name", {required: true, maxLength: 80})} 
          />
          <p style = {{color : "red"}}> { errors.Name && "Name is required"}</p>
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Adress" />
          {...register("Adress", {required: true})}
          <p style = {{color : "red"}}> { errors.Adress && "Adress is required"}</p> 
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
            />
             <p style = {{color : "red"}}> { errors.Email && "Email is not valid"}</p> 
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("Password", {required: true, min: 8 })} 
          />
             <p style = {{color : "red"}}> { errors.Password && "Enter at least 8 characters"}</p> 

        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
  )
}

export default Register
