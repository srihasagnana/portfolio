function Users(props) {
  console.log("is userslist:", props.curruser);
  

    return (
      <div>
          {props.curruser ? (
              <p>{props.curruser.username}</p>
          ) : (
              <p>No user data available</p>
          )}
      </div>
  );
  

}

export default Users;
