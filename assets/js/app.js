

import { createConectionGitHub } from './github.repos.js'
import { createConectionMedium } from './medium.api.js';
import { statusHeader } from './header.js';



createConectionGitHub()
createConectionMedium()

document.querySelector('.heder_img-ct').addEventListener('click', statusHeader);
document.querySelector('.popup-close').addEventListener('click', statusHeader);

