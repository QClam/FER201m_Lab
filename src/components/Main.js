import React,{Component} from "react"
import {Flims} from '../shared/ListOfFilms'
export class Main extends Component{
    constructor(){
        super();
        this.state = {
            films: Flims
        };
    }
    render(){
        return <FilmsPresentation films={this.state.films}/>
    }
}
export default Main