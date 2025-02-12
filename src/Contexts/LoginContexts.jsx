import {  createContext, useState } from "react";
export const logincontextsobj=createContext();

function LoginContexts({children}) {

    const [currentuser,setCurrentuser]=useState(null)
    const [loginstatus,setLoginstatus]=useState(false)
    const [loginerror,setLoginerror]=useState(null)

    function handleformloginsubmit({username,password}){
        fetch(`http://localhost:4000/users?username=${username}&password=${password}`,{method:"GET"})
        .then((res)=>res.json())
        .then((userlist)=>
          {
            if(userlist.length!==0){
              setCurrentuser(userlist[0])
              setLoginstatus(true)
              setLoginerror(null)
            }
            else{
              setLoginerror({message:"invalid username or password"})
            }
          }
        )
        .catch(err=>setLoginerror(err))
      }

      function handlelogout(){
        setCurrentuser(null)
        setLoginstatus(false)
        setLoginerror(null)
      }
  return (
    <div>
        <logincontextsobj.Provider value={{handleformloginsubmit,handlelogout,currentuser,loginstatus,loginerror}}>
            {children}
        </logincontextsobj.Provider>
    </div>
  )
}

export default LoginContexts