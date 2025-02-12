import { useContext } from "react";
import { countercontextobj } from "../../Contexts/CounterContext";

function Nodejs() {
  const {counter,setCounter}=useContext(countercontextobj);
  return (
    <div>
        <h3>NodeJS</h3>
        <h4 className="text-center">counter:{counter}</h4>
        <button className="btn btn-secondary" onClick={()=>setCounter(counter+1)}>increament</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores quas. Quasi, laudantium expedita ipsum libero eveniet sunt cupiditate fugiat distinctio hic dolores necessitatibus deleniti reprehenderit, eligendi error totam corrupti possimus rem assumenda quia ipsam minus unde vitae! Facilis amet reiciendis quas molestiae soluta. Excepturi culpa fugit animi dolore, molestiae sed aut voluptatum reiciendis, in tenetur eos voluptatem eligendi error. Suscipit perferendis harum porro exercitationem debitis quis quasi molestias, enim id, reiciendis molestiae ullam eaque dolor. Minus, debitis suscipit numquam illum dignissimos corporis atque cumque ad voluptatibus dolore sapiente sit dicta quis fugiat neque cum adipisci! Libero ad totam debitis eveniet neque aperiam veniam consequuntur nam natus maxime labore repudiandae nemo corporis, dolor omnis ipsam consectetur accusamus ratione illo facere minus autem? Dignissimos nisi, nostrum aperiam quaerat omnis consequuntur recusandae.</p>
    </div>
  )
}

export default Nodejs