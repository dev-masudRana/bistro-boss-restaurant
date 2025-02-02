import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User profile updated successfully");
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User profile updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  /* https://ibb.co.com/Kp4cGF7N */
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div className="flex flex-col justify-center bg-base-200 min-h-screen px-24">
        <div className="flex gap-20">
          <div className="w-1/2 flex items-center rounded-2xl">
            <img className="card" src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 w-1/2 shadow-2xl">
            <h1 className="text-5xl font-bold text-center pt-6">
              Sign Up Here!
            </h1>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="mt-2 text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="mt-2 text-red-600">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-2 text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="mt-2 text-red-600">Password required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mb-8">
              Already have an Account?{" "}
              <Link className="underline font-semibold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
