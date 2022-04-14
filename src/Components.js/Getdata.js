import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Getdata() {
    //Get API Axios
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = 'https://hiiguest.com/';
    const getAllData = () => {
        axios.get(`${url}get-per-km-rate`)
            .then((response) => {
                const allData = response.data;
                console.log(allData);
                //    setData(response.data);
                setData(allData);
                setLoading(true)
            })
            .catch(error => console.error(`Error:${error}`));

    }
    useEffect(() => {
        getAllData();
        //  getAllData1();
    }, []);
    const headers = {
        'Content-Type': 'application/json'
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/update-per-km-rate', {
            vehiclePerKmRate: data
        }, { headers }).then(response => {
            console.log(data)
        })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <h1>hhhhelo</h1>

            <h4>{data}</h4>
            <input type="text" name='vehiclePerKmRate' value={data} placeholder="Enter Value"
                onChange={
                    (e) => setData(e.target.value)
                }
            />

            {/* Update  */}
            <button onClick={submitHandler}>Submit</button>

        </>
    )
}

export default Getdata