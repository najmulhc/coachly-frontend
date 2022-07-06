import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "password must be 6 or more characters long"),
});
const Register = ({ setAuthType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-accent">Register</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="w-full">
        <div className="w-full  relative">
          <label htmlFor="email" className="">
            <input
              type="email"
              name="email"
              placeholder=" "
              {...register("email", {
                pattern: "w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$",
                required: true,
              })}
              className="email-input h-12 text-lg px-2 outline-none w-full mt-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
            />
            <span className="input-email text-lg absolute left-4 top-[27px] mx-0 text-primary transition-all duration-200 ">
              Email
            </span>
          </label>
          <label className="label">
            <span className="label-text-alt mt-1 text-red-700">
              {errors.email?.type === "required" &&
                "you need to enter your email adddres"}
              {errors.email?.type === "pattern" &&
                "Please enter a valid email address"}
            </span>
          </label>
        </div>

        <div className="w-full  relative">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder=" "
              {...register("password", {
                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                  
            
              })}
              className="h-12 text-lg px-2 outline-none w-full mt-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
            />
            <span className="input-password text-lg absolute left-4 top-[27px] mx-0 text-primary transition-all duration-200">
              Password
            </span>
          </label>
          <label className="label">
            <span className="label-text-alt mt-1 text-red-700">
              {errors.password?.message}{errors.password?.type === 'pattern' && "Make you password stronger with at least a number, a letter of both types, and a special character" }
            </span>
          </label>
        </div>
        <div className="w-full  relative">
          <label htmlFor="confirm-password">
            <input
              type="password"
              name="confirm-password"
              placeholder=" "
              {...register("conrimfPassword", {
                required: true,
              })}
              className="h-12 text-lg px-2 outline-none w-full mt-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300"
            />
            <span className="input-password text-lg absolute left-4 top-[27px] mx-0 text-primary transition-all duration-200">
              Confirm Password
            </span>
          </label>
          <label className="label">
            <span className="label-text-alt mt-1 text-red-700">
              {errors.confirmPassword?.type === "validate" &&
                "Please enter your password for login"}
            </span>
          </label>
        </div>
        <p className="text-center text-gray-800">
          Already Have an account?{" "}
          <button
            type="button"
            className="text-primary"
            onClick={() => setAuthType(true)}
          >
            login here
          </button>{" "}
        </p>
        <div className="flex w-full justify-center pt-4">
          <button
            className="btn btn-primary my-auto text-center "
            type="submit"
          >
            {
              errors?   'Register':<label htmlFor="my-modal" >Register</label>
           }
          </button>
        </div>
      </form>
    </section>
  );
};
export default Register;
