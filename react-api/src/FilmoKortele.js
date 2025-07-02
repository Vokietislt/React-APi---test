import { useEffect, useState } from "react";

const FilmoKoretele = (props)=>{
    const [liked,setLiked] = useState(false);
    useEffect(()=>{
        if(props.filmuSarasas.length!=0){
            props.filmuSarasas.forEach(element => {
                if( element.pavadinimas === props.pavadinimas){
                    setLiked(true)
                }
      });}
      
    },[]);  
    function handleLike() {
        props.handleLikedFilms({
            pavadinimas: props.pavadinimas,
            aprašymas: props.aprašymas,
            data: props.data,
            balsai: props.balsai,
            paveikslėlis: props.paveikslėlis})
        if(!liked){
            setLiked(true);
        }else{
            setLiked(false);
            localStorage.removeItem(props.pavadinimas);
        }
    }
    return(
        <div>
            <h2>{props.pavadinimas}</h2>
            <p>{liked ? "You liked this movie" : "You haven't liked this movie yet"}</p>
            <button className="likeBtn" onClick={handleLike}>like</button>
            <img src={props.paveikslėlis} alt={props.pavadinimas} />
            <p>{props.aprašymas}</p>
            <p>Data: {props.data}</p>
            <p>Balsai: {props.balsai}</p>
        </div>
    );
}
export default FilmoKoretele;