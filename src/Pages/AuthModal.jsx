import { useState }  from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";


const AuthModal = () => {
  const [authType, setAuthType] = useState(true);
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
         {
          authType ?   <Login setAuthType={setAuthType} />: <Register setAuthType={setAuthType}/> 
         }
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
