/*
 * The MIT License (MIT)

Copyright (c) 2014 Joacim Niden

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
document.addEventListener("DOMContentLoaded", function() { //Like jquery ready 
    find = document.querySelectorAll('[data-name]')[0].getAttribute('data-name'); //What we are looking for
    var jsonurl = find+'.json'; //The json file
    
    //Initiate Ajax
    var xmlhttp;
    if (window.XMLHttpRequest) {  
        xmlhttp = new XMLHttpRequest();// code for IE7+, Firefox, Chrome, Opera, Safari
    } else {   
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');// code for IE6, IE5
    }

    //The final structure
    domelement = document.querySelectorAll('[data-name="'+find+'"]');
    query = 'data-'+find+''; //What everything underneath will have
    wrapper = domelement[0].querySelector('['+query+'=container]'); //Wrapper
        
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            jsondata = JSON.parse(xmlhttp.responseText); //Json data
                       
            for(i=0;i<jsondata[find].length;i++){ //Loop through jsondata
                clonewrapper = wrapper.cloneNode(true);          
                object = jsondata[find][i];
                for(var key in object) {
                    var textnode = document.createTextNode(object[key]);
                    if(clonewrapper.querySelector('['+query+'='+key+']') !== null){
                        clonewrapper.querySelector('['+query+'='+key+']').appendChild(textnode);
                    }
                }             
                
                wrapper.parentNode.insertBefore(clonewrapper, wrapper.nextSibling); //Put it in the dom
            }
            wrapper.remove(); //Remove first wrapper

        }
    };
    
    xmlhttp.open("GET", jsonurl, true);
    xmlhttp.send();
}, false);
    




