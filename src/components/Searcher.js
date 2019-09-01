import React, { Component } from 'react';

class Searcher extends Component {


   searchRef = React.createRef();
   
   handleData = (e)=>{
		e.preventDefault();

		//we take the value of input.
		const termino = this.searchRef.current.value;
		
		// we send this for the mean 
		this.props.dataSearch(termino); 
	}



  render () {
    return (
      <form onSubmit={this.handleData}>

        	<div className="row">
        		<div className="form-group col-md-8">
        			<input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Search food"/>
        		</div>
        		<div className="form-group col-md-4">
        			<input type="submit" className="btn btn-lg btn-danger btn-block" value="Search ..."/>
        		</div>
        	</div>
      </form>
    );
  }
}

export default Searcher;