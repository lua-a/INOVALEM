import { useState } from "react";

function Logout() {
    const [ authState, setAuthState ] = useState({email: "", id: 0, status: false})

    handlelogout()
    function handlelogout()  {
        localStorage.removeItem("accessToken");
        setAuthState({...authState, status:false})
        window.location.replace("/");
        console.log("teste")
    };
}

export default Logout;
