interface IGlobalState {
    university: string;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    //estado inicial, definir a mano
    university: "Universidad de Sevilla"
}