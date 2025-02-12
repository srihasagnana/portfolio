import { useState,useEffect } from "react"

function Posts() {

    let [posts,setPosts]=useState([])
    let [err,setErr]=useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(i=>setPosts(i))
    .catch(e=>setErr(e))
    },[])

    console.log(posts)
    console.log(err)

  return (
    <div className='text-center'>
        <h1>Posts</h1>

        {
            err.message?.length!==0 ? <p className="text-danger display-3">{err.message}</p> : null
        }

        {
            posts.length===0?<div className="spinner-border text-primary m-5" role="status">
            
          </div> :<table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>
                {
                    posts.map(h=><tr key={h.id}>
                        <td>{h.userId}</td>
                        <td>{h.id}</td>
                        <td>{h.title}</td>
                    </tr>
                        
                    )
                }
            </tbody>
        </table>
        }


        
    </div>
  )
}

export default Posts