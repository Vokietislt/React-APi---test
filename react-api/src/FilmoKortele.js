import { useEffect, useState } from "react";

const FilmoKoretele = (props)=>{
    const [liked,setLiked] = useState(false);
    useEffect(()=>{
      localStorage.getItem(props.pavadinimas) === "Liked" ? setLiked(true) : setLiked(false);
    },[]);  
    function handleLike() {
        if(!liked){
            setLiked(true);
            localStorage.setItem(props.pavadinimas,"Liked");
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