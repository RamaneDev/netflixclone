import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorList, HeaderDetails, Spinner } from "../components";
import { API_KEY, API_URL } from "../config";



function Details(props) {
    
    const[State, SetState] = useState({
        loading:true,
        actors:[],
        mTitle: '',
        mDesc:'',
        imgSrc:'',
        revenue:'',
        runtime:'',
        status:'',
        vote:''
    });
    
    const {loading, mTitle, mDesc, actors, imgSrc, revenue, runtime, status, vote } = State;

    const id = useParams().id;


    useEffect(() => {     
      
        

        const loadInfo = async () => {
                
            const url =`${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr`;  
            const urlCredis =`${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=fr`;
            
            const res = await fetch(url);
            const credis_res = await fetch(urlCredis);

            return [await res.json(), await credis_res.json()];

            
        }       
          
        loadInfo().then(
            (res) => {              
                const {                      
                       revenue,
                       runtime, 
                       title, 
                       overview, 
                       status, 
                       vote_average, 
                       poster_path
                    
                } = res[0];

                const {
               
                        cast
                 
                } = res[1];


                const newState = {
                    loading:false,
                    actors: [...cast],
                    mTitle: title,
                    mDesc: overview,
                    imgSrc:poster_path,
                    revenue:revenue,
                    runtime:runtime,
                    status,
                    vote:vote_average
                };

              SetState(newState);               
            }
        );
    }, [id]);

  

 

    return (
        <div className="app">
                {loading?
                (
                    <Spinner />
                ): (
                    <>
                    <HeaderDetails 
                      mTitle={mTitle}
                      mDesc={mDesc}
                      imgSrc={imgSrc}
                      runtime={runtime}
                      revenue={revenue}
                      status={status}
                      vote={vote}
                    />
                    
                    <ActorList actors={actors} />
                    </>
                )}
            </div>
    )
}

export { Details }