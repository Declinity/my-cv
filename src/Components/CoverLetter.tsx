import { Link } from "react-router-dom"
import { Button, TextField, styled } from "@mui/material"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {Text} from "../Components/Data/Text.tsx"
import { useState } from "react"
import "./Styles/CoverLetter.css"
import { useEffect } from "react"
export const CoverLetter = () => {
    //customize text field. i copied and pasted this idk
    
    
    const [coverLetter, setCoverLetter] = useState("")
    const [company, setCompany] = useState(window.localStorage.getItem("company"))
    const [error, setError] = useState("")
    const showCoverLetter = (whichLetter) => {
        /* console.log(Text["CoverLetter"][whichLetter] ? Text["CoverLetter"][whichLetter][0] : "None") */
        if(Text["CoverLetter"][whichLetter]) {
            setCoverLetter(Text["CoverLetter"][whichLetter])
            !window.localStorage.getItem("company") && window.localStorage.setItem("company", company)
            setError("")
        }
        else {
            setError(`Cover letter not found for ${company}`)
        }
    }

    console.log(company)
    return(
    <div className="CL" style={{"height": "120%"}}>
        <div className="CL--background">
            {/* change this for violet height */}
            {/* <div className="home--about" style={{"height": "83%"}}>
            <h1 className="TNR" style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>Cover Letter:</h1>
            <p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>{Text.CoverLetter.p1}
                </p><p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>While 5 days is nowhere near sufficient to learn the complexities of AI, I’ve apprehended all the basics like the theoretical aspects behind it and the Python libraries used. I would love to expand my knowledge on such a fascinating subject, and doing so while working in a real-life environment is too good of an offer to pass on.
                </p><p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>As for me, I always give it my all no matter what task I’m trying to achieve, and strive for nothing less than perfection. I look for creative ways to stand out from the rest of crowd and try to go for the extra mile knowing it will pay off in the long term. While I haven’t had many opportunities before to work with a team in a professional environment, I can assure you it would not be intimidating for me at all and I would be looking forward to meeting new people with similar interests and mindsets.
                I’m confident that this placement would be beneficial for both for my own development and the Greater Manchester AI Foundry, I can promise right now to treat any task given with the utmost care and priority.
                </p><p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>And finally, a big thank you for reading my CV and cover note.
                </p>
                <br />
                <div style={{"float": "left"}}><Link to="/Info" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Contact & Info</Button></Link></div>
            </div> */}
            {(coverLetter.length === 0) ? <div className="CL--about" style={{"height": "90%", "textAlign": "center"}}>
            <h1 className="TNR" style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>Cover Letter:</h1>
            <br></br>   
            <h4 className="TNR">Enter your company's name for your personalised cover letter:</h4>
            <br />
                <TextField label="Company" onChange={(e) => setCompany(e.target.value)}/>
                <div>
                    <Button variant="contained" onClick={() => showCoverLetter(company.toLowerCase())}>Show COver Letter</Button>
                </div>
                <br />
                {error !== "" && error}
                {coverLetter}
                {/**this is not good */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{"float": "left"}}><Link to="/Info" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Contact & Info</Button></Link></div>

            </div> : 
            <div className="CL--about" style={{"height": "88%", "textAlign": "center"}} >
                <h1 className="TNR" style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>Cover Letter - {company.charAt(0).toUpperCase() + company.slice(1)}:</h1>
                <br></br>
                <div>
                    {coverLetter}
                </div>
                <br />
                <div style={{"float": "left"}}><Link to="/Info" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Contact & Info</Button></Link></div>
            </div>}
        </div>
    </div>)
}