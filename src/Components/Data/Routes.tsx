import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
import * as ImIcons from "react-icons/im"
import { FaGamepad } from "react-icons/fa"
export const SidebarData = [
    {
        title: "Home",
        path: "/Home",
        icon: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
        className: "nav-text"
    },
    {
        title: "University Portfolio",
        path: "/Portfolio",
        icon: <ImIcons.ImBooks></ImIcons.ImBooks>,
        className: "nav-text"
    },
    {
        title: "Personal Projects",
        path: "/Personal",
        icon: <FaGamepad />,
        className: "nav-text"
    },
    {
        title: "Contact & General Info",
        path: "/Info",
        icon: <BsIcons.BsPersonFill />,
        className: "nav-text"
    },
    {
        title: "Cover Letter",
        path: "/CoverLetter",
        icon: <AiIcons.AiFillMail />,
        className: "nav-text"
    },
]