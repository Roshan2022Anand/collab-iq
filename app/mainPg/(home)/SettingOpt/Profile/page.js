"use client"
import { MyContext } from '@/Components/Mycontext'
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/app/mainPg/(home)/mainPg.module.css"
import axios from 'axios';
import DataFetcher from '@/Components/homePg-components/DataFetcher';
import Loader from '@/Components/Loader';
const page = () => {

    const { userData } = useContext(MyContext);

    const [editingMode, seteditingMode] = useState(false)
    const [userName, setuserName] = useState("a");
    const [userAge, setuserAge] = useState("a");
    const [userQualification, setuserQualification] = useState("");
    const [userField, setuserField] = useState("");
    const [userBio, setuserBio] = useState("");
    const [userEmail, setuserEmail] = useState("")

    useEffect(() => {
        if (userData) {
            setuserName(userData.name);
            setuserAge(userData.age)
            setuserQualification(userData.qualification)
            setuserField(userData.field);
            setuserBio(userData.bio)
            setuserEmail(userData.email)
        } 
    }, [userData])

    //function to edit or save the data
    const editOrSave = async () => {
        let inputArr = document.querySelectorAll('input')
        if (editingMode) {
            inputArr.forEach(input => input.disabled = true)
            //updating the user data
            try {
                const res = await axios.post("/api/UpdateUser", { userName, userAge, userQualification, userField, userEmail, userBio })
                console.log(res);
            } catch (error) {
                console.log(error);

            }
        }
        else inputArr.forEach(input => input.disabled = false)
        seteditingMode(!editingMode)
    }
    const editStyle = {
        border: "1px solid white",
    }
    const saveStyle = {
        border: "none",
        backgroundColor: "transparent"
    }

    if (!userData) {
        return (<>
            <Loader />
            <DataFetcher />
        </>)
    }

    return (
        <section className={`${styles['profile-section-2']}`}>
            <div>
                <img />
                <button onClick={editOrSave}>{(editingMode) ? "Save" : "Edit"}</button>
            </div>
            <div>
                <p>Name :</p>
                <input type='text' value={userName} onChange={(e) => { setuserName(e.target.value) }} disabled={true} style={(editingMode) ? editStyle : saveStyle} />
            </div>
            <div>
                <p>Bio :</p>
                <input type='text' value={userBio} onChange={(e) => { setuserBio(e.target.value) }} disabled={true} style={(editingMode) ? editStyle : saveStyle} />
            </div>
            <div>
                <p>Age :</p>
                <input type='text' value={userAge} onChange={(e) => { setuserAge(e.target.value) }} disabled={true} style={(editingMode) ? editStyle : saveStyle} />
            </div>
            <div>
                <p>Qualification :</p>
                <input type='text' value={userQualification} onChange={(e) => { setuserQualification(e.target.value) }} disabled={true} style={(editingMode) ? editStyle : saveStyle} />
            </div>
            <div>
                <p>Field :</p>
                <input type='text' value={userField} onChange={(e) => { setuserField(e.target.value) }} disabled={true} style={(editingMode) ? editStyle : saveStyle} />
            </div>
        </section>
    )
}

export default page


