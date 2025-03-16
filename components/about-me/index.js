import { container } from "./elements/container.js";
import { image } from "./elements/image.js";
import { info } from "./elements/info.js";
import { wrapper } from "./elements/wrapper.js";

export function getAboutMe()
{
  wrapper.append(image,info)
  container.append(wrapper)
  return container
}