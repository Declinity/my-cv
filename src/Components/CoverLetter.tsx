import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
export const CoverLetter = () => {
    return(
    <div className="home" style={{"height": "110%"}}>
        <div className="home--background">
            {/* change this for violet height */}
            <div className="home--about" style={{"height": "83%"}}>
            <h1 className="TNR" style={{"textAlign": "center", "fontFamily": "'Times New Roman', Times, serif"}}>Cover Letter:</h1>
            <p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>I originally wasn’t considering taking a placement year, nor was I interested in most offers, as I wanted to finish my degree as soon as possible. My mind changed when I received an email from the university about this one in particular, and how exciting of an opportunity it would be. I’ve known since my first year of university that Artificial Intelligence is the field that I would want to develop my career in, and my interest was further bolstered by a 5-day course I took with Dr. Stephen Lynch.
</p><p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>While 5 days is nowhere near sufficient to learn the complexities of AI, I’ve apprehended all the basics like the theoretical aspects behind it and the Python libraries used. I would love to expand my knowledge on such a fascinating subject, and doing so while working in a real-life environment is too good of an offer to pass on.
</p><p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>As for me, I always give it my all no matter what task I’m trying to achieve, and strive for nothing less than perfection. I look for creative ways to stand out from the rest of crowd and try to go for the extra mile knowing it will pay off in the long term. While I haven’t had many opportunities before to work with a team in a professional environment, I can assure you it would not be intimidating for me at all and I would be looking forward to meeting new people with similar interests and mindsets.
I’m confident that this placement would be beneficial for both for my own development and the Greater Manchester AI Foundry, I can promise right now to treat any task given with the utmost care and priority.
</p><p className="TNR" style={{"textAlign": "center", "paddingTop": "10px"}}>And finally, a big thank you for reading my CV and cover note.
</p>
<br />
<div style={{"float": "left"}}><Link to="/Info" style={{"textDecoration": "none"}}><Button startIcon={<AiOutlineArrowLeft />} style={{"minWidth": "200px", "marginLeft": "5px"}} variant="contained">Contact & Info</Button></Link></div>

            </div>
        </div>
    </div>)
}