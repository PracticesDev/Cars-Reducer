import { useEffect, useReducer } from "react";
import { CarsReducer } from "../CarsReducer";


const initialState = [
    // {
    // id: new Date().getTime(),
    // name: 'Chevrolet',
    // placa: 'HJY576'
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem('cars')) || [];
}


export const useCars = () => {

    const [cars, dispatch] = useReducer(CarsReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('cars', JSON.stringify(cars))
    }, [cars])


    const handleNewCars = (cars) => {
        const action = {
            type: '[Cars] add Cars',
            payload: cars
        }
        dispatch(action);
    }
    const handleDeleteCars = (cars) => {
        const action = {
            type: '[Cars] delete Cars',
            payload: cars
        }
        dispatch(action);
    }

    const handleUpdateCars = (cars) => {
        console.log(cars.id)

    }

    return{
        cars,
        handleNewCars,
        handleDeleteCars,
        handleUpdateCars
    }
   
}
