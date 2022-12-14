import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';


//Class Component
class App extends React.Component {
    
    /*constructor(props) {
        super(props)
        //initalize state object
        this.state={ latitude: null, errorMessage : '' }
    }*/
    //state initialization
    state =  {  latitude: null, errorMessage : '' }

    componentDidMount() {
        //call geolocation API service
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
                );
            }

    render() {
        //CONDITIONAL RENDERING : three options to render: latitude, error, API response wait
       if(this.state.errorMessage && !this.state.latitude){
        return <div> {this.state.errorMessage} </div>
       }        
       //passing the data from the state to the HemisphereDisplay component with props (latitude, in this case)
       if(!this.state.errorMessage && this.state.latitude){
        return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
       }
       else {
        return <div>Loading...</div>
       }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)