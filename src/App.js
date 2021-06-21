import './App.css';
import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

class App extends Component {
      url;
      str;
      showinfo=false;
  constructor() {
    super();
    this.state = {
      
      
      input:'',
      

      calories:'',
      totfat:'',
      dailyfat:'',
      satfat:'',
      dailysat:'',
      chol:'',
      dailychol:'',
      sodi:'',
      dailysodi:'',
      carbohydrate:'',
      dailycarb:'',
      dailyprot:'',
      prot:'',
      vitamin:'',
      dailyvit:'',
      calcium:'',
      dailycal:'',
      iron:'',
      dailyiron:'',
      potassium:'',
      dailypot:''
      

    }
  }

 
    

  getData = e => {
    this.setState({ input: e.target.value })
    
  }
  analyze=()=>{
      this.showinfo=true
      let api='https://api.edamam.com/api/nutrition-data?app_id=023f1ce7&app_key=5e977c86f6c6866dd7341f9a02d2a662&ingr='
      this.str=this.state.input;
      this.url=api+this.str;
      this.updateData();

  }
  reset=()=>{
    this.showinfo=false
    this.setState({input:''})
  }
  updateData = () => {
    if (this.state.input === '') {
      
      alert("enter atleast one food")
    }
    else {
      

      fetch(this.url)
      .then(response=>{
        return response.json()
      })
      .then(response=>{
        this.setState({data:response})
        this.setState({calories:response.calories,totfat:response.totalNutrients.FAT,satfat:response.totalNutrients.FASAT,chol:response.totalNutrients.CHOLE,sodi:response.totalNutrients.NA})
        this.setState({carbohydrate:response.totalNutrients.CHOCDF,prot:response.totalNutrients.PROCNT,vitamin:response.totalNutrients.VITD,calcium:response.totalNutrients.CA,iron:response.totalNutrients.FE})
        this.setState({potassium:response.totalNutrients.K})
        this.setState({dailyfat:response.totalDaily.FAT,dailysat:response.totalDaily.FASAT,dailychol:response.totalDaily.CHOLE,dailysodi:response.totalDaily.NA,dailycarb:response.totalDaily.CHOCDF})
        this.setState({dailyprot:response.totalDaily.PROCNT,dailyvit:response.totalDaily.VITD,dailycal:response.totalDaily.CA,dailyiron:response.totalDaily.FE,dailypot:response.totalDaily.K})
       
      })
    
      
      
    }
  }
  
  
  render() {
    return (
      
      <div class="App">
        
        <Card classname="card" style={{width : '25rem'}}>
      
          <Card.Body classname="card-body">
            <Card.Title>Nutrition Analysis API Demo <i class="fal fa-utensils-alt"></i></Card.Title>
            <p class="card-text">Enter an ingredient list list for what you are cooking, like <span>"1 cup rice, 10 oz chickpeas"</span>, etc.
              Enter each ingredient on a new line.
            </p>
            <textarea value={this.state.input} onChange={this.getData} class="input"type="text"></textarea><br/>
            <button onClick={this.analyze} type="button" class="butt">Analyze</button>
            <button onClick={this.reset} type="reset"class="Reset">New Recipe</button>
            <div id="rightArea" class="col-12 col-sm-5 ">
          <div style={{display:this.showinfo?"block":"none "}}class="fact-container">
              <section id="factCard">
                  <p class="h2 m-0 pt-3" id="factTitle">Nutrition Facts</p>
                  <table id="factTable">
                      <thead>
                          <tr>
                              <th class="text-start">Amount Per Serving</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th class="calories text-start">Calories</th>
                              <td class="fw-bold">{this.state.calories}</td>
                          </tr>
                          <tr>
                              <td class="small-info thickBorder text-end fw-bold" colspan="3">% Daily Value*</td>
                          </tr>
                          <tr>
                              <th class="factItems fw-bold">Total Fat {this.state.totfat.quantity}{this.state.totfat.unit}</th>
                              <td class="factPercentage">{this.state.dailyfat.quantity}{this.state.dailyfat.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Saturated Fat {this.state.satfat.quantity}{this.state.satfat.unit}</th>
                              <td class="factPercentage">{this.state.dailysat.quantity}{this.state.dailysat.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Trans Fat </th>
                              <td class="factPercentage"></td>
                          </tr>
                          <tr>
                              <th class="factItems fw-bold">Cholesterol {this.state.chol.quantity}{this.state.chol.unit}</th>
                              <td class="factPercentage">{this.state.dailychol.quantity}{this.state.dailychol.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems fw-bold">Sodium {this.state.sodi.quantity}{this.state.sodi.unit}</th>
                              <td class="factPercentage">{this.state.dailysodi.quantity}{this.state.dailysodi.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems fw-bold">Total Carbohydrate {this.state.carbohydrate.quantity}{this.state.carbohydrate.unit}</th>
                              <td class="factPercentage">{this.state.dailycarb.quantity}{this.state.dailycarb.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Dietary Fiber  </th>
                              <td class="factPercentage"></td>
                          </tr>
                          <tr>
                              <th class="factItems">Total Sugars </th>
                              <td class="factPercentage"></td>
                          </tr>
                          <tr>
                              <th class="factItems">Includes - Added Sugars</th>
                              <td class="factPercentage"></td>
                          </tr>
                          <tr>
                              <th class="factItems fw-bold">Protein {this.state.prot.quantity}{this.state.prot.unit}</th>
                              <td class="factPercentage">{this.state.dailyprot.quantity}{this.state.dailyprot.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Vitamin D {this.state.vitamin.quantity}{this.state.vitamin.unit}</th>
                              <td class="factPercentage">{this.state.dailyvit.quantity}{this.state.dailyvit.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Calcium {this.state.calcium.quantity}{this.state.calcium.unit}</th>
                              <td class="factPercentage">{this.state.dailycal.quantity}{this.state.dailycal.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Iron {this.state.iron.quantity}{this.state.iron.unit}</th>
                              <td class="factPercentage">{this.state.dailyiron.quantity}{this.state.dailyiron.unit}</td>
                          </tr>
                          <tr>
                              <th class="factItems">Potassium {this.state.potassium.quantity}{this.state.potassium.unit}</th>
                              <td class="factPercentage">{this.state.dailypot.quantity}{this.state.dailypot.unit}</td>
                          </tr>
                      </tbody>
                  </table>
                  <p class="small-info mt-3">*Percent Daily Values are based on a 2000 calorie diet</p>
              </section>
          </div>
    </div>
            
              
          </Card.Body>
            
                
            
             
              
        </Card>
     </div>

      
    )
  }
}

export default App;