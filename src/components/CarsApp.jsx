import { useEffect, useReducer } from "react"
import { CarsReducer } from "../CarsReducer";
import { CarsList } from "./CarsList";
import { CarsAdd } from "./CarsAdd";

const initialState = [
    // {
    // id: new Date().getTime(),
    // name: 'Chevrolet',
    // placa: 'HJY576'
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem('cars')) || [] ;
}

export const CarsApp = () => {

    const [cars, dispatch] = useReducer(CarsReducer, initialState,init);

    useEffect(() => {
      localStorage.setItem('cars', JSON.stringify(cars))
    }, [cars])
    

    const handleNewCars= (cars)=>{
        const action = {
            type: '[Cars] add Cars',
            payload: cars
        }
        dispatch( action ); 
    }
    const handleDeleteCars= (cars)=>{
        const action = {
            type: '[Cars] delete Cars',
            payload: id
        }
        dispatch( action ); 
    }


    return (
        <>
            <h2 className="container text-center">Vehilos App: 0,  <em> Pendientes: 1 </em></h2>
            <hr />
            <div className="container text-center">
                <div className="row">
                    <div className="col border-right">
                        <CarsList cars={ cars }/>
                    </div>

                    <div className="col">
                        <CarsAdd onNewCars= { handleNewCars }/>               
                    </div>
                </div>
            </div>
        </>
    )
}
