
export const CarsItem = ({ carss }) => {



    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{carss.name}:{carss.placa}</span>
            <button className="btn btn-danger" >Borrar</button>
        </li>
    )
}
