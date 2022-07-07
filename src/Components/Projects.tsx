import "./Styles/Projects.css"
import MovieVideo from "../Media/MovieDB.mkv"
import Road from "../Media/Road.png"
import AlgorithmsDTs from "../Media/ADT.png"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
export const Projects = () => {
    return(
        <div className="projects">
            <div className="projects--background">
                <div className="projects--title">
                    <h1 className="TNR" style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>University Projects</h1>
                    <br />
                    <h2 className="TNR" style={{"textAlign": "center", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "marginLeft": "5px", "textDecoration": "underline"}}>Year 2:</h2>
                    <div className="project">
                        <br />
                        <h3 className="TNR" style={{"textAlign": "center"}}>Movie Database Presentation Tool:</h3>
                            <div style={{"display": "flex", "justifyContent": "center"}}>
                            <video width="450" height="320" controls>
                                <source src={MovieVideo} type="video/mp4"></source>
                            </video>
                            </div>
                        <p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>This assignment consisted of turning a very large CSV file containing information for over 17.000 movies into a movie search engine, and the additional tasks of adding search filters.</p>
                        <br />
                        <h5 style={{"textAlign": "center", "paddingTop": "5px"}}>Languages used: Python (PANDAS), SQL, JavaScript (React)</h5>
                        <h5 style={{"textAlign": "center", "paddingTop": "5px"}}><a href="https://drive.google.com/drive/folders/1JO62CQYPykbumZ4Ce7GsbjFCva4RCCs6?usp=sharing">Source code</a></h5>
                    </div>
                    <br />
                    <div className="project">
                        <br />
                        <h3 style={{"textAlign": "center"}}>Motorway Signal Web Service:</h3>
                        <br />

                        <div style={{"display": "flex", "justifyContent": "center"}}>
                            <img src={Road} width="450" height="240" style={{"borderRadius": "20px"}} />
                        </div>
                        <br />

                        <p style={{"textAlign": "center"}} className="TNR">Currently trying to get ahold of assignment specification from the university, as it's unclear what the tasks are without it. This assignment was required to be done in a single day, with specifications mostly regarding: reading from SQL databases, parsing XML/JSON files and creating server routes.</p>
                        <br />

                        <h5 style={{"textAlign": "center", "paddingTop": "5px"}}>Languages used: Java, SQL</h5>
                        <h5 style={{"textAlign": "center", "paddingTop": "5px"}}><a href="https://drive.google.com/file/d/14rwCe_33BgL7P9m6W2DOdpg_oIY2tSaY/view?usp=sharing">Source code</a></h5>
                    </div>
                    <br />
                    <div className="project">
                        <br />
                        <h3 style={{"textAlign": "center"}}>Algorithms and Data Structures portfolio</h3>
                        <div style={{"display": "flex", "justifyContent": "center"}}>
                            <img src={AlgorithmsDTs} width="350" height="340" />
                        </div>
                        <br />

                        <p style={{"textAlign": "center"}} className="TNR">A collection of different Data Structures and Algorithms. Generic specification for each of the algorithms can be found <a href="https://drive.google.com/file/d/1m8ZSrRX7sap4UNSn7_Yrt6jJYa-RxqsZ/view?usp=sharing">here</a></p>
                        <br />

                        <h5 style={{"textAlign": "center", "paddingTop": "5px"}}>Languages used: C#, C++</h5>
                        
                        <h5 style={{"textAlign": "center", "paddingTop": "5px"}}><a href="https://drive.google.com/drive/folders/14gCh3rCk2QHB1mSBxi2zCexkf9lMxvE6?usp=sharing">Source code</a></h5>
                    </div>
                    <br />

                    <div>
                        <div style={{"float": "left"}}><Link to="/" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Home</Button></Link></div>
                        <div style={{"float": "right"}}><Link to="/Personal" style={{"textDecoration": "none"}}><Button endIcon={<AiOutlineArrowRight />} style={{"minWidth": "200px", "marginRight": "5px"}} variant="contained">Personal Projects</Button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}