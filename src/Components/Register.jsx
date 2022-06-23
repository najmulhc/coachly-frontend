const Register = ({setAuthType}) => {
    return (
        <>
        <h1>This is register page</h1>
        <button className="btn btn-primary" type="button" onClick={() => setAuthType(true)}>LOgin</button>
        </>
    )
}
export default Register;