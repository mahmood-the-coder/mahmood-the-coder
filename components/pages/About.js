import { body } from "../../main.js";
import { getAboutMe } from "../about-me/index.js";
import { getFooter } from "../footer/index.js";
import { getHeader } from "../header/index.js";


export function renderAboutMe() {
    body.innerHTML = "";
    const header = getHeader();
    const footer=getFooter();
    const aboutMe=getAboutMe()
    body.append(
        header,
        aboutMe,
        footer
    );
}
