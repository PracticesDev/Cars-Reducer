
export const CarsReducer = (  initialState = [], action  ) => {

    switch (action.type) {
        case '[Cars] add Cars':
            return [ ...initialState, action.payload]
        case '[Cars] delete Cars':
            return initialState.filter(cars => cars.id !== action.payload);
    
        default:
            return initialState;
    }  
}
