

import { createConectionGitHub } from './github.repos.js'
import { createConectionMedium } from './medium.api.js';


createConectionGitHub()

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

createConectionMedium();