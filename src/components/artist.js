
import React from 'react';


const Artist = ({artist}) => {

    if (!artist) return null
    
    const {images,name,genres,popularity, followers}=artist
    return(
        

                        <div className=" container">
                       
                             <div className="d-flex justify-content-center">
                                 <div className=" artist-profile   m-3">
                                    <img  src={images[0] && images[0].url} alt="artist-profil"/>
                                    <h1>{name}</h1>
                                    <p>{genres.join(', ')}</p>
                                    <h5> popularity {popularity}</h5>
                                    <p>{followers.total}  followers</p>
                        </div>
                        </div>
                        </div>
            
        
       

        
    )



}

    
    

    
   


export default Artist;