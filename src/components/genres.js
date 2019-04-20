import React , {Component} from 'react'
import GENRES from './../data/backgrounds';

class Genre extends Component{
    state={
        genresIndex:0,
        transition:true
    }

    componentDidMount=()=>{
        this.animateGenres()
        setTimeout(()=> this.setState({transition:false}),2000)
    }

    componentWillUnmount=()=>{
        this.genreInterval();
    }

    animateGenres=()=>{
        this.genreInterval= setInterval(()=>{
            const genresIndex= (this.state.genresIndex +1)  % GENRES.length
            this.setState({
                genresIndex,
                transition:true
            })
            setTimeout(()=> this.setState({transition:false}),2000)
        },4000)
    }
    




    render(){


        
        const{genresIndex ,transition} =this.state
            
            const {image} = GENRES[genresIndex]
        return(
            
           
                   
                       
                            <div className="genres flex-column justify-content-between">
                               
                               <img  className={transition ? 'fade-out' :'fade-in'} style={{width:200,height:200}} src={image} alt=""/>
                               
                               
                               
                                
                            </div>
                            
                        
                    )
                   
              
          
      
  
}}


export default Genre;