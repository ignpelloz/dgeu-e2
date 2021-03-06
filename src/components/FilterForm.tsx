import * as React from 'react';

//import data from './db.json'
var data = require('./db.json'); // forward slashes will depend on the file location

// TODO:
// everytime the "search" button is pressed, the state should be updated. The state should be displayed as a table (JSON as a table)
// In conclussion, every time the search button is pressed, the table should be updated BUT withouth changing the page
// Or actually, should I create another component and use redux for the comunications? it would be SearchResults

interface IFilterFormProps {
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

    public queryDB(){
        for (var i = 0; i < data.length; i++){
            var obj = data[i];
            console.log(obj);
        }
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
                        <option value="Arial">Ingenieria</option>
                        <option value="Fantasy">Ciencias</option>
                        <option value="Cursive">Administración</option>
                    </select></div>

                    <div style={{marginTop: "5px"}}><label>Tipo de Titulación</label>
                    <select >
                        <option value="Master">Master</option>
                        <option value="Grado">Grado</option>
                    </select></div>

                    <button style={{marginTop: "15px"}} onClick={this.queryDB} type="button">Buscar</button>

                    </div>
        );
    }
}
export default FilterForm;