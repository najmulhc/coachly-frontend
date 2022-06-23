const Login = ({setAuthType}) => {
    return (
        <div> <h1>THis is login page </h1>
        <button className="btn btn-primary" type="button" onClick={() => setAuthType(false)}>regsiter</button>
        </div> 
    )
}
export default Login ; 