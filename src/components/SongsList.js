import React,{useState, useEffect} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongsList = () => {
    const[songs,setSongs]=useState([{title:"This wild darkness",id:1},
    {title:"almost Home",id:2},{title:"memory gospel",id:3}])
    
    const[age,setAge]=useState(20);

    const addSong = (title) => {
       // setSongs([...songs,{title:title, id:uuid()}]) in es6 if key and value name both are same we can use like below
        setSongs([...songs,{title, id:uuid()}])
    }

    useEffect(()=>{
        console.log('useEffect hook run', songs)
    },[songs])

    useEffect(()=>{
        console.log('useEffect hook age',age)
    },[age])
    return(
        <div className="song-list">
            <ul>
                {songs.map(song =>{
                return(<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>setAge(age+1)}>Add 1 to the Present Age: {age}</button>
        </div>
    )
}
export default SongsList