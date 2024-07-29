import { PiVideoFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdAnimation } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "My Youtube",
        icon: <PiVideoFill/>,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <FaStar/>,
        src: "/today"
    },
    {
        title: "추천 음악",
        icon: <IoMusicalNotesSharp />,
        src: "/music"
    },
    {
        title: "추천 영화",
        icon: <MdOutlineDesignServices/>,
        src: "/movie"
    },
    {
        title: "추천 도서",
        icon: <GrDocumentUser/>,
        src: "/book"
    },
    {
        title: "추천 애니",
        icon: <MdAnimation/>,
        src: "/anime"
    },
    {
        title: "유튜브 사이트",
        icon: <FaYoutube/>,
        src: "/youtube"
    },
];

export const searchKeyword=[
    {
        title: "MyYoutube",
        src: "/youtube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "JAVA",
        src: "/search/java"
    },
    {
        title: "ORACLE",
        src: "/search/oracle"
    },
    {
        title: "SPRING",
        src: "/search/spring"
    },
    {
        title: "music",
        src: "/search/music"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },

];

export const snsLink = [
    {
        titel: "github",
        url: "https://github.com/SeoWolHyang/web-youtube",
        icon: <AiFillGithub/>
    },
    {
        titel: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube/>
    },
    {
        titel: "google",
        url: "https://www.google.com/",
        icon: <AiFillGoogleCircle/>
    },
    {
        titel: "instargram",
        url: "https://www.instagram.com/",
        icon: <AiFillInstagram/>
    },
];