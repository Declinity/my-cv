import "./Styles/Home.css"
import me from "../Media/Me.jpg"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

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
                    <p style={{"paddingLeft": "10px", "paddingTop": "10px", "fontFamily": "'Times New Roman', Times, serif", "fontSize": "20px"}}>My name is Daniel Scholes and I'm currently undertaking a Computer Science degree at Manchester Metropolitan University. I've always been passionate about technology since a young age, I was learning about the Linux OS when I was 12 and starting coding in Python at the age of 16. I'm always striving to learn more and to improve current skills, and it's why I love to work with other like minded teams to achieve a goal. To learn more about me please use the sidebar or click any of the following buttons: </p>
                    <div style={{"display": "flex", "justifyContent": "center", "marginTop": "45px"}}>
                        <Link to="/Portfolio" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px", "marginRight": "45px"}} variant="contained">Uni Portfolio</Button></Link>
                        <Link to="/Personal" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px"}} variant="contained">Personal Projects</Button></Link>
                    </div>
                    <div style={{"display": "flex", "justifyContent": "center", "marginTop": "15px"}}>
                        <Link to="/Info" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px", "marginRight": "45px"}} variant="contained">Info {"&"} Contact</Button></Link>
                        <Link to="/Portfolio" style={{"textDecoration": "none"}}><Button style={{"minWidth": "200px"}} variant="contained">Cover Letter</Button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}   