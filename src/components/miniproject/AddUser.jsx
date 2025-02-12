import { useForm } from "react-hook-form";
import Header from './Header';
import { Outlet } from "react-router-dom";
import { useState } from "react";

function AddUser() {
    const [adduserstatus, setAdduserstatus] = useState(false);
    const { register, handleSubmit } = useForm();
    const [curruser, setCurruser] = useState(null);

    function handleadduserstatus(obj) {
        console.log(obj);
        // POST the user data to the server
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())  // Make sure to get the response in JSON
        .then(() => {
            // Use username and password from the submitted data for the GET request
            const { username, password } = obj;
            fetch(`http://localhost:4000/users?username=${username}&password=${password}`, {
                method: "GET"
            })
            .then(res => res.json())
            .then(user => {
                if (user.length !== 0) {
                    setCurruser(user[0]);  // Set the first user
                    setAdduserstatus(true); // Only update after user data is fetched
                }
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log("Error during POST:", err));
    }

    console.log("from adduser:", curruser);

    return (
        <div>
            <Header />
            <Outlet />
            {adduserstatus === false ? (
                <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleadduserstatus)}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" {...register("username")} className="mt-2 form-control" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")} className="mt-2 form-control" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register("email")} className="mt-2 form-control" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="phno">Phone no</label>
                        <input type="text" {...register("phno")} className="mt-2 form-control" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-3">Add User</button>
                    </div>
                </form>
            ) : null}

            {/* You can display curruser data here */}
            {curruser && (
                <div>
                    <h3>User Information:</h3>
                    <p>Username: {curruser.username}</p>
                    <p>Email: {curruser.email}</p>
                    <p>Phone Number: {curruser.phno}</p>
                </div>
            )}
        </div>
    );
}

export default AddUser;
