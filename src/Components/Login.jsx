import { useForm } from "react-hook-form"; 

const Login = ({setAuthType}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-accent">Login</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="w-full">
        <div className="w-full form-control relative">
          <label htmlFor="email" className="">
            <input
              type="email"
              name="email"
              placeholder=" "
              {...register("email", {
                pattern: 'w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$',
                required: true,
              })}
              className="h-12 text-lg px-2 outline-none w-full my-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
            />
            <span className="input-email text-lg absolute left-4 top-[27px] mx-0 text-primary transition-all duration-200 ">
              Email
            </span>
          </label>
          <label className="label">
            <span className="label-text-alt mt-[-20px] text-red-700">
              {errors.email?.type === "required" &&
                "you need to enter your email adddres"}
              {
                errors.email?.type === "pattern" && "Please enter a valid email address"
              }
            </span>
          </label>
        </div>
        <label htmlFor="password" className="relative">
          <input
            type="password"
            name="password"
            placeholder=" "
            {...register("password", {
              required: true,
            })}
            className="h-12 text-lg px-2 outline-none w-full my-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
          />
          <span className="input-password text-lg absolute left-4 top-[-2px] mx-0 text-primary transition-all duration-200">
            Password
          </span>
        </label>
        <label className="label" >
          <span className="label-text-alt mt-[-20px] text-red-700">
            {errors.password?.type === "required" &&
              "Please enter your password for login"}
          </span>
        </label>
        <p className="text-center text-gray-800">New Here? <button type="button" className="text-primary" onClick={()=>setAuthType(false)}  >some</button> </p>
        <button className="btn btn-primary mx-auto" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};
export default Login;
