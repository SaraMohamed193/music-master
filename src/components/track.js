import React, {Component} from 'react';


class Tracks extends Component {
    constructor(props){
        super(props);
        this.state={
             
        }
    }
   
    
    playAudio =(previewUrl)=> {

        
        const audio = new Audio(previewUrl); 
    
   

        if (audio.pause){
            audio.play();
            
            
        }else{
            audio.pause();
            
        };

       
      
        
        console.log(this.state.audio)
        console.log(this.state.playPreviewUrl)
    
        
    }

   
    // trackIcon = track => {
    //     if  (this.state.audio.pause)
    //       {
    //           return (
    //               <i className="fas fa-pause"></i>
    //           )
    //       }
    //       else{
    //           return(
    //               <i className="fas fa-play"></i>
    //           )
             
    //       }
         
    //   }


    

   
    
   





   
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
                   {/* <div className="track-icon">{this.trackIcon(track)}</div> */}

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