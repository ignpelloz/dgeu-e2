import * as React from 'react';
import University from '../styledComponents/University';

//import data from './db.json'
var data = require('./db.json'); // forward slashes will depend on the file location

// TODO:
// everytime the "search" button is pressed, the state should be updated. The state should be displayed as a table (JSON as a table)
// In conclussion, every time the search button is pressed, the table should be updated BUT withouth changing the page
// Or actually, should I create another component and use redux for the comunications? it would be SearchResults

interface IFilterFormProps {
    university: string
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
}

interface IFilterFormState {
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
}


//class FilterForm extends React.Component<IFilterFormProps, IFilterFormState> {
class FilterForm extends React.Component<{}, {}> {

    //constructor(props: IFilterFormProps) {
     //   super(props);
     //   this.state = {};
    //}

    public queryDB(){ // TODO: this should receive the 3 parameters and return a list of degrees (list of strings) that should be then rendered
        
        const uni="Universidad de Sevilla"
        
        //const area="Ingeniería"
        const area="Ciencia"
        
        const tipo="bachelorDegrees"
        var res = []
        for (var i = 0; i < data.length; i++){
            var obj = data[i];
            console.log(obj);
            if (obj["university"] === uni){
                
                console.log("")
                console.log(obj)
                console.log("")

                var univ_degrees = obj[tipo]
                console.log(univ_degrees)

                for (var j = 0; j < univ_degrees.length; j++){
                
                    console.log(univ_degrees[j])

                    if (univ_degrees[j].includes(area)){
                
                        res.push(univ_degrees[j])
                
                    }
                }
            }
        }
        console.log(res);
        return res
    }

    public render() {
        return ( 
            
            <div>
                <h3>Buscador de Titulaciones</h3>
            <div><label>Universidad </label>
                    <select  >
                        <option value="Universidad de Almería">Universidad de Almería</option>
                        <option value="Universidad de Cádiz">Universidad de Cádiz</option>
                        <option value="Universidad de Cordoba">Universidad de Cordoba</option>
                        <option value="Universidad de Granada">Universidad de Granada</option>
                        <option value="Universidad de Málaga">Universidad de Málaga</option>
                        <option value="Universidad de Huelva">Universidad de Huelva</option>
                        <option value="Universidad de Sevilla">Universidad de Sevilla</option>
                        <option value="Universidad de Jaén">Universidad de Jaén</option>
                        <option value="Universidad Pablo de Olavide">Universidad Pablo de Olavide</option>                        
                    </select></div>

                    <div style={{marginTop: "5px"}}><label>Area </label>
                    <select >
                        <option value="Ingeniería">Ingenieria</option>
                        <option value="Ciencias">Ciencias</option>
                        <option value="Administración">Administración</option>
                    </select></div>

                    <div style={{marginTop: "5px"}}><label>Tipo de Titulación</label>
                    <select >
                        <option value="masterDegrees">Master</option>
                        <option value="bachelorDegrees">Grado</option>
                    </select></div>

                    <button style={{marginTop: "15px"}} onClick={this.queryDB} type="button">Buscar</button>

                    </div>
        );
    }
}
export default FilterForm;