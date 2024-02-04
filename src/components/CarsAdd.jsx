import { useForm } from "../Hooks/useForm"

export const CarsAdd = ({ onNewCars }) => {

    const { onResetForm,onInputChange, name, gama } = useForm({
        id: new Date().getTime(), 
        name: '',
        gama: ''
    });


    const onForm = (event) => {

        event.preventDefault();


        const newCars = {
            id: new Date().getTime(),
            name,
            gama
        }

        onNewCars(newCars);
        onResetForm();

    }

    return (
        <>
            <h5>Agregar</h5>
            <form onSubmit={onForm}>
                <div>
                    <input
                        type="text"
                        placeholder="Marca Vehiculo"
                        className="form-control"
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Gama Vehiculo"
                        className="form-control"
                        name="gama"
                        value={gama}
                        onChange={onInputChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
