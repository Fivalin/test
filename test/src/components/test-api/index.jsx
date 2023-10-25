import { useEffect, useState } from 'react';
import styles from './style.module.css'


const TestApi = () => {
    const [teamData,setTeamData] = useState([])
    const [isLoad, setIsLoad] = useState(true);
    useEffect(() => {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5317770662mshaeec4cf0cea4753p14921cjsnf6861f8bcb5d',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };


    fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
        setTeamData(res.data)
        setIsLoad(false)
    })
    }, [])
    return ( 
    <div style={{color: 'white'}}>
        <div>Команды</div>
        {isLoad && <div>Загруска данных...</div>}
        {teamData.map((el) => {
            return (   
            <div 
            key={el.id}> 
            {el.id}. Команда под названием: {el.name}, из города {el.city}, их дивизион - {el.division}
            <img src='https://play-lh.googleusercontent.com/FYgRCaOMPOOYej_lhBvckfUV__hSR5jkI7FVmjqX4SLrbvrDCm1v64FiDXnHBGd6BRjl'
             style={{width: "20px",height: "20px"}}
             onClick={() => {
             setTeamData(
             teamData.filter((filtEl) => filtEl.id !== el.id)
             )
              } }/>
            </div>
            )
        })}
    </div>
    )
};
export default TestApi;