import { aboutMe } from "./elements/about-me.js";
import { home } from "./elements/home.js";
import { wrapper } from "./elements/wrapper.js";

export function getNav()
{
    wrapper.append(home,aboutMe)
    return wrapper

}