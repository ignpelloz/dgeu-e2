import * as React from 'react';
import University from '../styledComponents/University';

//import data from './db.json'
var data = require('./db.json'); // forward slashes will depend on the file location

// TODO:
// everytime the "search" button is pressed, the state should be updated. The state should be displayed as a table (JSON as a table)
// In conclussion, every time the search button is pressed, the table should be updated BUT withouth changing the page
// Or actually, should I create another component and use redux for the comunications? it would be SearchResults

interface IFilterFormProps {
    /*
    university: string
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
    */
    uni: string
    tipo: string
    area: string
    results: [string, string][]
}

interface IFilterFormState {
    /*
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
    */
    uni: string
    tipo: string
    area: string
    results: [string, string][]
}


//class FilterForm extends React.Component<IFilterFormProps, IFilterFormState> {
class FilterForm extends React.Component<{}, IFilterFormState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            uni: "Universidad de Sevilla",
            tipo: "Máster",
            area: "Ingeniería",
            results: []
        };
        this.queryDB = this.queryDB.bind(this); // TODO: why needed?? https://stackoverflow.com/questions/45998744/react-this-state-is-undefined

    }

    public setUni(event: React.ChangeEvent<HTMLSelectElement>) {
        let newState = {
            uni: event.target.value,
            tipo: this.state.tipo,
            area: this.state.area,
            results: this.state.results
        }
        this.setState(newState);
    }
    public setArea(event: React.ChangeEvent<HTMLSelectElement>) {
        let newState = {
            uni: this.state.uni,
            tipo: this.state.tipo,
            area: event.target.value,
            results: this.state.results
        }
        this.setState(newState);
    }
    public setTipo(event: React.ChangeEvent<HTMLSelectElement>) {
        let newState = {
            uni: this.state.uni,
            tipo: event.target.value,
            area: this.state.tipo,
            results: this.state.results
        }
        this.setState(newState);
    }


    //public queryDB(uni: string, area: string, tipo: string){ // TODO: this should receive the 3 parameters and return a list of degrees (list of strings) that should be then rendered
    public queryDB() { // TODO: this should receive the 3 parameters and return a list of degrees (list of strings) that should be then rendered

        //uni=this.state."Universidad de Sevilla"
        //const area="Ingeniería"
        //area="Ciencias"
        //tipo="Máster"

        //var res = []
        const res: [string, string][] = [];
        for (var i = 0; i < data.length; i++) {

            var obj = data[i];
            //console.log(obj);

            if (obj["university"] === this.state.uni) {

                var uniWeb = obj["web"]

                //console.log("")
                //console.log(obj)
                //console.log("")

                var univ_degrees = obj["degrees"]
                //console.log(univ_degrees)

                for (var j = 0; j < univ_degrees.length; j++) {

                    //console.log(univ_degrees[j])

                    if (this.state.tipo === "Máster" && univ_degrees[j]["name"].includes("Máster") && this.state.area === univ_degrees[j]["area"]) {
                        res.push([univ_degrees[j]["name"], uniWeb])
                    }
                    else if (this.state.tipo === "Grado" && !univ_degrees[j]["name"].includes("Máster") && this.state.area === univ_degrees[j]["area"]) {
                        res.push([univ_degrees[j]["name"], uniWeb])
                    }


                }
            }
        }
        console.log(res);
        let newState = {
            uni: this.state.uni,
            tipo: this.state.tipo,
            area: this.state.area,
            results: res
        }
        this.setState(newState);
    }

    public render() {
        return (

            <div>
                <h3>Buscador de Titulaciones</h3>
                <div><label>Universidad </label>
                    <select onChange={e => this.setUni(e)} >
                        <option value="Universidad de Sevilla">Universidad de Sevilla</option>
                        <option value="Universidad de Almería">Universidad de Almería</option>
                        <option value="Universidad de Cádiz">Universidad de Cádiz</option>
                        <option value="Universidad de Cordoba">Universidad de Cordoba</option>
                        <option value="Universidad de Granada">Universidad de Granada</option>
                        <option value="Universidad de Málaga">Universidad de Málaga</option>
                        <option value="Universidad de Huelva">Universidad de Huelva</option>
                        <option value="Universidad de Jaén">Universidad de Jaén</option>
                        <option value="Universidad Pablo de Olavide">Universidad Pablo de Olavide</option>
                    </select></div>

                <div style={{ marginTop: "5px" }}><label>Area </label>
                    <select onChange={e => this.setArea(e)} >
                        <option value="Ingeniería">Ingenieria</option>
                        <option value="Ciencias">Ciencias</option>
                        <option value="Otros">Otras</option>
                    </select></div>

                <div style={{ marginTop: "5px" }}><label>Tipo de Titulación</label>
                    <select onChange={e => this.setTipo(e)} >
                        <option value="Máster">Máster</option>
                        <option value="Grado">Grado</option>
                    </select></div>

                <button style={{ marginTop: "15px" }} onClick={this.queryDB} type="button">Buscar</button>

                {/*
                    <div style={{marginTop: "15px"}}>
                        <p>{this.state.results}</p>
                    </div>
                    */}

                <div style={{ marginTop: "15px" }}>
                    {this.state.results.map(degreeResult =>
                        <div>
                            <p>{degreeResult[0]} <a target="_blank" href={degreeResult[1]}>(Más Información)</a></p>
                        </div>
                    )}



                </div>

            </div>
        );
    }
}
export default FilterForm;