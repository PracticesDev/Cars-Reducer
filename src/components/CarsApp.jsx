import { CarsList } from "./CarsList";
import { CarsAdd } from "./CarsAdd";
import { useCars } from "../Hooks/useCars";


export const CarsApp = () => {

    const { cars, handleNewCars, handleDeleteCars, handleUpdateCars} = useCars();

    return (
        <>
            <h2 className="container text-center">Vehilos App: <strong>{cars.length}</strong></h2>
            <hr />
            <div className="container text-center">
                <div className="row">
                    <div className="col border-right">
                        <CarsList
                            cars={cars}
                            onDeleteCars={handleDeleteCars}
                            onUpdateCars={handleUpdateCars}
                        />
                    </div>

                    <div className="col">
                        <CarsAdd
                            onNewCars={handleNewCars}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
