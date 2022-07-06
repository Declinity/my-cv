import Potato from "../Media/potati.jpg"
import Doom from "../Media/doom.jpg"
import AI from "../Media/ai.jpg"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
export const Personal = () => {
    return (
    <div className="projects">
    <div className="projects--background">
        <div className="home--about">
            <h1 style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>Personal Projects:</h1>
        <div>
            <br />
            <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>potato.tf community staff & content creator:</h2>
            <br/>
            <div style={{"display": "flex", "justifyContent": "center"}}>
                <img src={Potato} height="128px" width="128px" style={{"borderRadius": "90px"}}/>
            </div>
            <br/>
            <p className="TNR" style={{"textAlign": "center"}}>Created several levels for one of the largest communties (over 27.000 members) between 2017 and 2019 for Team Fortress 2, an online multiplayer game. Eventually I became a staff member and was tasked to judge and assess other content creator's levels as well as moderating social media interactions. It involved a lot of teamwork and communication with other staff members and the use of organization tools such as Trello.</p>
        </div>
        <br />
        <div>
            <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>DOOM Eternal content creator:</h2>
            <br />
            <div style={{"display": "flex", "justifyContent": "center"}}>
                <img src={Doom} height="200px" width="320px" style={{"borderRadius": "45px"}}/>
            </div>
            <br />
            <p className="TNR" style={{"textAlign": "center"}}>Created several levels for DOOM Eternal, a singleplayer game, and documented them on a YouTube channel that reached over 4000+ subscribers. I was only the second person to ever create a custom level, meaning I had to figure out the logic behind the game functinality mostly by myself. I was contacted by id Software, the game developers, but I can't discolse any more information currently as I am under NDA.</p>
        </div>
        <br />
        <div>
            <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>AI Workshop portfolio:</h2>
            <br />
            <div style={{"display": "flex", "justifyContent": "center"}}>
                <img src={AI} height="200px" width="320px" style={{"borderRadius": "45px"}}/>
            </div>
            <br />
            <p className="TNR" style={{"textAlign": "center"}}>The university offered an optional 5 day course delving into AI, the following Python scripts were written by me, but I was heavily assisted by Dr. Stephen Lynch who led the workshop.</p>
        </div>
        <br />
        <div>
            <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>NFT trading/selling website - WIP:</h2>
            <p className="TNR" style={{"textAlign": "center"}}>After recently learning the Solidity programming language for smart contracts I'm currently working on a NFT selling and trading platform, similar to OpenSeas, for a much larger project I would like to develop. It is still in its very early stages and I don't have anything to show as of now.</p>
        </div>
        <div>
            <div style={{"float": "left"}}><Link to="/Portfolio" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Uni portfolio</Button></Link></div>
            <div style={{"float": "right"}}><Link to="/Info" style={{"textDecoration": "none"}}><Button endIcon={<AiOutlineArrowRight />} style={{"minWidth": "200px", "marginRight": "5px"}} variant="contained">Info</Button></Link></div>
         </div>
        </div>
    </div>
</div>)
}