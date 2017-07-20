/*
var doctypeObj = document.doctype;

document.getElementById('doctype').innerHTML = doctypeObj.name + "\n\n" +
doctypeObj.internalSubset + "\n\n" +
doctypeObj.publicId + "\n\n" +
doctypeObj.systemId


function change(){
    
    var header = document.getElementsByTagName("H1").item(0);
    header.firstChild.data = "Change of document";
    
    var para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "The paragraph, is strong tonight";

    var newText = document.createTextNode("Very Strong tonight");
    var newElement = document.createElement("P");
    newElement.appendChild(newText);
    para.parentNode.appendChild(newElement);
}
*/
