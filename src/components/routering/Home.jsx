import { useContext } from "react"
import { countercontextobj } from "../../Contexts/CounterContext";

function Home() {
  const {counter,setCounter}=useContext(countercontextobj)
  return (
    <div className='container mt-4'>
      <h1>Home</h1>
      <h4 className="text-center">counter:{counter}</h4>
      <button className="btn btn-secondary" onClick={()=>setCounter(counter-1)}>decreament</button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex minus placeat eum! Nobis et consectetur tenetur optio sequi a aspernatur quasi sit blanditiis nemo, earum, nulla distinctio sint itaque facere eaque quos asperiores natus laboriosam neque dolore! Quos quod consequatur ab, deserunt quis officia cupiditate sit quibusdam harum numquam pariatur aliquid, cumque voluptatibus ducimus, dignissimos dolor hic iste. Quas veritatis adipisci facere iste nulla aperiam quo qui doloribus, harum eum autem eligendi perspiciatis praesentium hic. Porro iusto odio consequuntur neque quaerat doloremque natus accusamus cum perspiciatis molestiae? Pariatur quod assumenda corrupti vel ipsam nobis corporis. Consectetur consequuntur nostrum adipisci!</p>
    </div>
  )
}

export default Home