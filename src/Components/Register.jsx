const Register = ({ setAuthType }) => {
  return (
    <>
      <h1>This is register page</h1>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setAuthType(true)}
      >
        LOgin
      </button>
      <label htmlFor="my-modal" type="button" className="btn btn-secondary">
        Close Modal
      </label>
    </>
  );
};
export default Register;
