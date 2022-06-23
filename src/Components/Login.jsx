
const Login = ( ) => {
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-accent">Login</h1>
      <form>
        <label htmlFor="email" className="relative">
          <input type="email" name="email" className="h-12 text-lg px-2 outline-none w-full my-4 border-2 border-primary rounded-md text-primary focus:border-secondary focus:text-secondary transition duration-300" />
          <span className="input-email text-lg absolute left-4 top-0 mx-0 text-primary transition-all duration-200 ">Email</span>
        </label> 
      </form>
    </section>
  );
};
export default Login;
