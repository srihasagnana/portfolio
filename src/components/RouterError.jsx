import { useRouteError } from "react-router-dom"

function RouterError() {
    const rouerr=useRouteError()
    console.log(rouerr)
  return (
    <div>
        <p className="text-danger text-center display-5 text-align-center mt-5">{rouerr.data}</p>
        <p className="text-warning text-center display-5 text-align-center">{rouerr.status} - {rouerr.statusText}</p>
    </div>
  )
}

export default RouterError