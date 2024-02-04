import { CarsItem } from "./CarsItem"


export const CarsList = ({ cars = [] }) => {

    return (
        <>
            <h5>Lista Vehiculos</h5>
            <ul>
                {
                    cars.map(carss => (
                        <CarsItem key={ carss.id } carss={ carss }/>
                    ))
                }
            </ul>
        </>
    )
}
