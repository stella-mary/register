import { useState, useEffect } from 'react'
import './Register.css'
import { navigate, useNavigate } from "react-router-dom";


const getDatafromValues = () => {
    const data = localStorage.getItem("Register");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};



export default function Register() {

    // const initialValues = { name: "", mobile: "", comments: "" };
    const [register, setRegister] = useState(getDatafromValues());
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("")
    const [collegeName, setCollegeName] = useState("")
    const [attendence, setAttendence] = useState("")

    const [yesOrNo, setYesOrNo] = useState("")


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };



    const [hover, setHover] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(register));
        let newFormValue = {
            id: register.length + 1,
            name: name,
            mobile: mobile,
            email: email,
            city: city,
            collegeName: collegeName,
            attendence: attendence,


        };
        setRegister([...register, newFormValue])
        setName("")
        setMobile("")
        setEmail("")
        setCity("")
        setCollegeName("")
        setAttendence("")


        localStorage.setItem(
            "Register",
            JSON.stringify([...register, newFormValue])
        );
        console.log(JSON.stringify(newFormValue));
        navigate('./Attendence')
    }

    const addNewList = () => {
        navigate("/Attendence")
    }


    return (
        <div>
            <h1>Register</h1>
            <p className='navBar' onClick={addNewList}><span className="underline">Attendence</span></p>
            <form className='Head' onSubmit={handleSubmit}>
                <p className='para'>Name</p>
                <p className='para'>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p className='para'>Mobile Number</p>
                <p className='para'>
                    <input
                        type="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </p>
                <p className='para'>Email</p>
                <p className='para'>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>

                <p className='para'>City</p>
                <p className='para'>
                    <input
                        type="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </p>

                <p className='para'>College Name</p>
                <p className='para'>
                    <input
                        type="collegeName"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                    />
                </p>
                <button className='submit'>Submit</button>
            </form >

        </div >
    )
}
