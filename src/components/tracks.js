import React, {Component} from 'react';


class Tracks extends Component {
    constructor(props){
        super(props);
        this.state={
            play:false, audio:null, playPreviewUrl:null 
        }
    }
   
    
    playAudio =(previewUrl)=> {

        
        const audio = new Audio(previewUrl); 

        if (!this.state.play){
            audio.play()
            this.setState({audio,play:true,playPreviewUrl:previewUrl })
            
            
        }else{
          
                this.state.audio.pause()
                
           }
          
        
        if(this.state.playPreviewUrl===previewUrl){
            this.setState({
                playPreviewUrl:null, 
             })

        
    } else{
        audio.play()
        this.setState({
            audio,playPreviewUrl:previewUrl
         })
    }
}
        
    trackIcon = track => {
      if  (this.state.play &&
        this.state.playPreviewUrl===track.preview_url){
            return (
                <i className="fas fa-pause"></i>
            )
        }
        else{
            return(
                <i className="fas fa-play"></i>
            )
           
        }
       
    }
    

   
    
   




    
   
render(){
    
    

    const {tracks}= this.props;
   


    return(
        <div>
 
 <div className="container">
 
                            
               <div className="row "> 
               
   {  
       
       tracks.map(track=>{


           const {id, name, album, preview_url} = track 
           return (
             
              
              <div className="col-sm-12 col-md-6 col-lg-3" key={id} onClick={()=>{this.playAudio(preview_url)} }>
              <div className="track-img d-flex justify-content-center" >
          
                   <img  src={album.images[0].url} alt="track-img" />
                   <div className="track-icon">{this.trackIcon(track)}</div>

              </div>
              
                 
                 <h4 className="text-center">{name}</h4>

               </div>
                
              

             
           )
           
       })
       
    }

     

     </div>
              </div>
              

        </div>
        
            
    )
}
}

    

export default Tracks;