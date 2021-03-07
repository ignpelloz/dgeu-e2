import { connect } from 'react-redux';

import FilterForm from '../components/FilterForm';
import IGlobalState from '../states/globalState';

const mapStateToProps = (state:IGlobalState) => {
    return({university: state.university}) //las propiedades del componente FilterForm
    //crea esa propiedad a partir de la información del estado global
}

//Con esto, ese FilterForm recibe el store de forma automatica
export default connect(mapStateToProps)(FilterForm); 