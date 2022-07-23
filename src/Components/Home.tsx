import "./Styles/Home.css"
import me from "../Media/Me.jpg"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Text } from "./Data/Text.tsx"

export const Home = () => {
    return (
        
        <div className="home">
            <div className="home--background">
                <div className="home--about">
                    <h1 style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>About me</h1>
                    <br />
                    <div style={{"display": "flex", "justifyContent": "center"}}>
                        <img src={me} height="128px" width="128px" style={{"borderRadius": "90px"}}/>
                    </div>
                    <br />
                    <p style={{"paddingLeft": "10px", "paddingTop": "10px", "fontFamily": "'Times New Roman', Times, serif", "fontSize": "20px"}}>{Text.Home}</p>
                    <div style={{"display": "flex", "justifyContent": "center", "marginTop": "10px"}}>
                        <Link to="/Portfolio" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px", "marginRight": "45px"}} variant="contained">Uni Portfolio</Button></Link>
                        <Link to="/Personal" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px"}} variant="contained">Personal Projects</Button></Link>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "center", "marginTop": "15px"}}>
                        <Link to="/Info" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px", "marginRight": "45px"}} variant="contained">Info {"&"} Contact</Button></Link>
                        <Link to="/CoverLetter" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px"}} variant="contained">Cover Letter</Button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}   