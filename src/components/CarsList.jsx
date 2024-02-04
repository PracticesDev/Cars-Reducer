import { CarsItem } from "./CarsItem"


export const CarsList = ({ cars = [], onDeleteCars, onUpdateCars }) => {

    return (
        <>
            <h5>Lista Vehiculos</h5>
            <ul>
                {
                    cars.map(carss => (
                        <CarsItem
                            key={carss.id}
                            carss={carss}
                            onDeleteCars={ id => onDeleteCars(id) }
                            onUpdateCars={ id => onUpdateCars(id) } 
                        />
                    ))
                }
            </ul>
        </>
    )
}
