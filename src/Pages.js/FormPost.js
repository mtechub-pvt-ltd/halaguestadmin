
// FUnctional com 
import React, { useState } from 'react'
import axios from 'axios';
import ImageUpload from './ImageUpload';

const divStyle={
    color:'white',
    padding:'100px',

}
function FormPost() {
    const [compPhno, setcompPhno] = useState("");
    const [comName, setcompName] = useState("");
    const [image, setImage] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [VcompanyOfManufacture, setVcompanyOfManufacture] = useState("");
    const [VplateNumber, setVplateNumber] = useState("");
    const [Vyearofmanuf, setVyearofmanuf] = useState("");
    const [vehicleColor, setvehicleColor] = useState("");
    const [driverLicense, setdriverLicense] = useState("");
    const [vehicleOwnership, setvehicleOwnership] = useState("");
    const headers={
        'Content-Type':'application/json'
    }
    const submitHandler = (e) => {
        e.preventDefault()
        // POst Request 
        axios.post('https://hiiguest.com/create-driver',{
        company:{
            phoneNo:compPhno,
            name:comName
        },
        image:image,
        phoneNo:phoneNo,
        name:name,
        email:email,
        gender:gender,
        vehicleDetails:{
            companyOfManufacture:VcompanyOfManufacture,
            plateNumber:VplateNumber,
            yearOfManufacture:Vyearofmanuf,
            vehicleColor:vehicleColor
        },documents:{
            driverLicense:driverLicense,
            vehicleOwnership:vehicleOwnership
        }

    },{headers}) .then(response => {
                console.log(response)
                window.alert('Create DriverSuccessfully')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={divStyle}>
            <h1>Post Data using axios</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="name" value={compPhno} placeholder="compPhno"
                        onChange={
                            (e) => setcompPhno(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="price" value={comName} placeholder="comName"
                        onChange={(e) => setcompName(e.target.value) 
                        } />
                </div>
                <div>
                    {/* <input type="text" name="image" value={image} placeholder="image"
                        onChange={(e) => setImage(e.target.value) 
                        } /> */}
                        <ImageUpload/>
                </div>
                <div>
                    <input type="text" name="price" value={phoneNo} placeholder="phoneNo"
                        onChange={(e) => setphoneNo(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="name" value={name} placeholder="name"
                        onChange={(e) => setName(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="email" value={email} placeholder="email"
                        onChange={(e) => setEmail(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="gender" value={gender} placeholder="gender"
                        onChange={(e) => setGender(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="VcompanyOfManufacture" value={VcompanyOfManufacture} placeholder="VcompanyOfManufacture"
                        onChange={(e) => setVcompanyOfManufacture(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="VplateNumber" value={VplateNumber} placeholder="VplateNumber"
                        onChange={(e) => setVplateNumber(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="Vyearofmanuf" value={Vyearofmanuf} placeholder="Vyearofmanuf"
                        onChange={(e) => setVyearofmanuf(e.target.value) 
                        } />
                </div>
                <div>
                    <input type="text" name="vehicleColor" value={vehicleColor} placeholder="vehicleColor"
                        onChange={(e) => setvehicleColor(e.target.value) 
                        } />
                </div>
                <div>
                    {/* <input type="text" name="vehicleColor" value={driverLicense} placeholder="driverLicense"
                        onChange={(e) => setdriverLicense(e.target.value) 
                        } /> */}
                        <ImageUpload/>
                </div>
                <div>
                    {/* <input type="text" name="vehicleColor" value={vehicleOwnership} placeholder="vehicleOwnership"
                        onChange={(e) => setvehicleOwnership(e.target.value) 
                        } /> */}
                        <ImageUpload/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default FormPost