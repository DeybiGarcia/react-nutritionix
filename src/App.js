
import React, { Component } from 'react';
import '../src/styles/bootstrap.css'
import Searcher from './components/Searcher'

class App extends Component {


	state = {
		termino : 'Cafe',
		results: []
	}


	consultFood = async event => {
		const termino = this.state.termino;
		const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
		const appId = 'xxxxxxx';
		const appKey = 'xxxxxxxxxxxxxxxxx'


		const response = await fetch(url, {
			method: "post",
        	headers: {
	          	"x-app-id": appId,
	          	"x-app-key": appKey,
	          	
	          	"Content-Type": "application/json"
        	},
        
        	body: JSON.stringify({
          		query: termino
        	})
        	
		} )
		console.log("RESPUESTA" + response);

		if (response.status !== 200) {
	      console.log("Error: " + response.status);
	    }
	    const data = await response.json();
	    const results = data.foods;
	    if (results !== undefined) {
	      this.setState({ results });
	    }
	    else {
	      
	      alert("invalid food");
	    }
	    console.log("FIN DE BUSQUEDA" + results);
	    console.log(JSON.stringify(results));

	}


	dataSearch = (termino)=>{
		this.setState ({
			termino
		}, () => {this.consultFood();
				}
		)
	}
	
	render(){
		  return (
		    <div className="app container">
		      <div className="jumbotron">
		        <p className="lead text-center">Searcher of food and nutrients</p>		        
			        <Searcher
			         dataSearch={this.dataSearch} 
			         />
		      </div>
		       
		       <div >
		       		{this.state.results.map((dynamicData,i) => {return (
						<div className="row" key={i}>
							<div className="col-md-2">
								<img src={dynamicData.photo.thumb} />
      						</div>
							<div className="form-group col-md-1">
								<div className="row">
									<b>{dynamicData.food_name}</b>															
								</div>
								<div className="row">
									{dynamicData.serving_weight_grams} gr
								</div>
							</div>

							<div className="form-group col-md-6">
								{dynamicData.brand_name}

							</div>
						
							<div className="form-group col-md-1">{dynamicData.nf_calories}</div>

						</div>)})	
		       		}
		      </div>
		      

		    </div>
		  );
	}
}

export default App;
