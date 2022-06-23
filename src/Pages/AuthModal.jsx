import { useState }  from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";


const AuthModal = () => {
  const [authType, setAuthType] = useState(false);
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
         {
          authType ?   <Login setAuthType={setAuthType} />:<Register setAuthType={setAuthType}/> 
         }
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;