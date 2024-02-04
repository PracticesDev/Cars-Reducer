
export const CarsItem = ({ carss, onDeleteCars, onUpdateCars }) => {



    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{carss.name}: {carss.gama}</span>
            <button
                className="btn btn-danger fixed"
                onClick={() => onDeleteCars(carss.id)}
            >
                Borrar
            </button>
            <br />
            <button
                className="btn btn-primary"
                onClick= { () => onUpdateCars(carss.id) }
            >
                Actualizar
            </button>

        </li>
    )
}
