import IconCodepen from "../../assets/IconLinks/IconCodepen";
import IconCodewars from "../../assets/IconLinks/IconCodewars";
import IconDevto from "../../assets/IconLinks/IconDevto";
import IconFacebook from "../../assets/IconLinks/IconFacebook";
import IconFreecodecamp from "../../assets/IconLinks/IconFreecodecamp";
import IconFrontendMentor from "../../assets/IconLinks/IconFrontendMentor";
import IconGithub from "../../assets/IconLinks/IconGithub";
import IconGitlab from "../../assets/IconLinks/IconGitlab";
import IconHashnode from "../../assets/IconLinks/IconHashnode";
import IconLinkedin from "../../assets/IconLinks/IconLinkedin";
import IconStackOverflow from "../../assets/IconLinks/IconStackOverflow";
import IconTwitch from "../../assets/IconLinks/IconTwitch";
import IconTwitter from "../../assets/IconLinks/IconTwitter";
import IconYoutube from "../../assets/IconLinks/IconYoutube";

export const selectItemArr = [
  { image: <IconCodepen />, text: "CodePen", domain: "codepen.io",style: {backgroundColor: "#EE3FC8", color: "white"} },
  { image: <IconCodewars />, text: "CodeWars", domain: "www.codewars.com/users",style: {backgroundColor: "var(--pink-900)", color: "white"} },
  { image: <IconDevto />, text: "DevTo", domain: "dev.to",style: {backgroundColor: "var(--grey-900)", color: "white"} },
  { image: <IconFacebook />, text: "Facebook", domain: "www.facebook.com",style: {backgroundColor: "#2442AC", color: "white"} },
  { image: <IconFreecodecamp />, text: "FreeCodeCamp", domain: "www.freecodecamp.org",style: {backgroundColor: "var(--purple-950)", color: "white"} },
  { image: <IconFrontendMentor />, text: "Frontend Mentor", domain: "www.frontendmentor.io/profile",style: {backgroundColor: "white", color: "var(--grey-500)"} },
  { image: <IconGithub />, text: "Github", domain: "github.com",style: {backgroundColor: "var(--grey-950)", color: "white"} },
  { image: <IconGitlab />, text: "Gitlab", domain: "gitlab.com",style: {backgroundColor: "#EB4925", color: "white"} },
  { image: <IconHashnode />, text: "Hashnode", domain: "hashnode.com/@" ,style: {backgroundColor: "var(--blue-800)", color: "white"}}, // username goes after '@'
  { image: <IconLinkedin />, text: "Linkedin", domain: "www.linkedin.com/in",style: {backgroundColor: "var(--blue-500)", color: "white"} },
  { image: <IconStackOverflow />, text: "StackOverflow", domain: "stackoverflow.com/users",style: {backgroundColor: "var(--orange-600)", color: "white"} },
  { image: <IconTwitch />, text: "Twitch", domain: "www.twitch.tv",style: {backgroundColor: "var(--purple-600)", color: "white"} },
  { image: <IconTwitter />, text: "Twitter", domain: "twitter.com",style: {backgroundColor: "#43B7E9", color: "white"} },
  { image: <IconYoutube />, text: "Youtube", domain: "www.youtube.com/@",style: {backgroundColor: "#EE3939", color: "white"} } // or /channel/ID
];