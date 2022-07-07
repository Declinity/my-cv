import { IconContext } from "react-icons/lib"
import "./Styles/Info.css"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
export const Info = () => {
    return(
    <IconContext.Provider value={{"color": "white"}}>
    <div className="info">
        <div className="info--background">
            <div className="info--about">
                <h1 style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>General Information</h1>
                <br />
                <div>
                    <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>Languages:</h2>
                    <p className="TNR" style={{"textAlign": "center"}}>Italian: ★★★★★</p>
                    <p className="TNR" style={{"textAlign": "center"}}>English: ★★★★★</p>
                    <p className="TNR" style={{"textAlign": "center"}}>Spanish: ★★☆☆☆</p>
                </div>
                <br />
                <div className="home--links">
                    <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>Personal Info:</h2>
                    <p className="TNR" style={{"textAlign": "center"}}>-Age: 20</p>
                    <p className="TNR" style={{"textAlign": "center"}}>-Birthday: 11/11/2001</p>
                    <p className="TNR" style={{"textAlign": "center"}}>-Nationality: British</p>
                    <p className="TNR" style={{"textAlign": "center"}}>-Hobbies: Reading, Swimming, Skating, Video Games and Coding</p>
                </div>
                <br />
                <div>
                    <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>Work Experience:</h2>
                    <p className="TNR" style={{"textAlign": "center"}}>-Intern for Porto Montenegro in the customer service department (2015) and marketing department (2016).</p>
                    <p className="TNR" style={{"textAlign": "center"}}>-Took the UN student ambassador course in 2017.</p>
                </div>
                <br />
                <div>
                    <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>Contact:</h2>
                    <p className="TNR" style={{"textAlign": "center"}}>Email: daniel.a.scholes@gmail.com</p>
                    <p className="TNR" style={{"textAlign": "center"}}>Tel: +44 7876633143</p>
                </div>
                <br />
                <div>
                    <div style={{"float": "left"}}><Link to="/Personal" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Personal Projects</Button></Link></div>
                    <div style={{"float": "right"}}><Link to="/CoverLetter" style={{"textDecoration": "none"}}><Button endIcon={<AiOutlineArrowRight />} style={{"minWidth": "200px", "marginRight": "5px"}} variant="contained">Cover Letter</Button></Link></div>
                 </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>)
}