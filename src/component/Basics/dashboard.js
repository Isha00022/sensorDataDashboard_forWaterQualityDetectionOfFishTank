import React,{useEffect,useState} from 'react';
import './style.css';


const Dashboard = () => {

    const [data , setData] = useState("66.6");
    const [search,setSearch] = useState("Mumbai");
    //we have fat arrow function bcz we have to use asyc , but it will give err without fat arroe fn
    useEffect( () => {
        //${search}
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=b8695eb2870e64cc09fa1e0601f53096`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setData(resJson);
        }
        try{
            fetchApi();
        }
        catch(err){
             console.log(err);
        }
    }
    //,[search]
    )

    return(
        <>
          <h1 className='mainHead'>Dashboard</h1>
          <div className='body2'>
          <div className = "box">
                <div>
                    <div className='name'>
                      <h3 className='heading'>Temperature</h3>
                    </div>  
                    <div className='valueBox'>
                        <h5 className='valueData'>62.8 F</h5>
                    </div>
                </div>
          </div>
          <div className = "box">
                <div>
                    <div className='name'>
                      <h3 className='heading'>Temperature</h3>
                    </div>  
                    <div className='valueBox'>
                        <h5 className='valueData'>62.8 F</h5>
                    </div>
                </div>
          </div>
          <div className = "box">
                <div>
                    <div className='name'>
                      <h3 className='heading'>Temperature</h3>
                    </div>  
                    <div className='valueBox'>
                        <h5 className='valueData'>62.8 F</h5>
                    </div>
                </div>
          </div>
          </div>
        </>
    )
}

export default  Dashboard