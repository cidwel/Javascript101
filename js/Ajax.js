
let request = new XMLHttpRequest();
let url = 'https://www.reddit.com/r/gameofthrones/.json';
request.open('GET',url, true);

//Main Way
//
// function HTTPAnswer () {
//     console.log("click");
//     let table = '';
//     let result = '';
//
//     table += '<table id="listTable" border="2" cellspacing="0">';
//     if(request.readyState == 4) {
//         if (request.status == 200) {
//
//             let arrayAnswer = JSON.parse(request.responseText);
//             let dataAnswer = arrayAnswer["data"]["children"];
//
//             for (var i = 0; i < 10; i++) {
//                 let title = dataAnswer[i]["data"]["title"];
//                 let url = dataAnswer[i]["data"]["url"];
//                 result = url.link(url)
//                 table += "<tr>" + " <h5>" + "Post Nº : " + (i + 1) + " - " + title + "</h5> " + result + "</td></tr>";
//             }
//             table += '</table><br>';
//
//         } else {
//             console.log("Error loading page\n");
//         }
//         document.getElementById('table').innerHTML = table;
//
//     }};
//
//
// request.onreadystatechange = HTTPAnswer;
//
// request.send();

//
// function generateTable(){
//     var body = document.getElementById("app");
//
//     // creates a <table> element and a <tbody> element
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//
//     if (request.status == 200) {
//         let arrayAnswer = JSON.parse(request.responseText);
//
//
//         let dataAnswer = arrayAnswer["data"]["children"];
//         // creating all cells
//         for (var i = 0; i < 2; i++) {
//             let title = dataAnswer[i]["data"]["title"];
//             let url = dataAnswer[i]["data"]["url"];
//             let result = url.link(url);
//             // creates a table row
//             var row = document.createElement("tr");
//             var rowText = document.createTextNode(result);
//             for (var j = 0; j < 5; j++) {
//                 // Create a <td> element and a text node, make the text
//                 // node the contents of the <td>, and put the <td> at
//                 // the end of the table row
//                 var cell = document.createElement("td");
//                 var cellText = document.createTextNode(title + result);
//                 cell.appendChild(cellText);
//                 row.appendChild(cell);
//             }
//
//             // add the row to the end of the table body
//             tblBody.appendChild(row);
//         }
//     }
//
//     // put the <tbody> in the <table>
//     tbl.appendChild(tblBody);
//     // appends <table> into <body>
//     body.appendChild(tbl);
//     tbl.setAttribute("border", "1");
// }
//

// WITH PROMISES
function getInfo() {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                let table = '';
                let result = '';
                let maxColumns = 5;
                table += '<table border="2" cellspacing="2">';
                let arrayAnswer = JSON.parse(req.responseText);
                let dataAnswer = arrayAnswer["data"]["children"];

                for (var i = 0; i < 10; i++) {
                    let title = dataAnswer[i].data.title;
                    let url = dataAnswer[i].data.url;
                    let author = dataAnswer[i]["data"]["author"];
                    let date = dataAnswer[i]["data"]["created_utc"];
                    let dateTime = (new Date(date * 1000)).toLocaleString();
                    result = url.link(url);
                    if (i % maxColumns === 0){
                        table +="<tr style='width: 50px;'>"
                    }
                    table += "<td style='background: #e8d7e5;'>"
                        + "<h5>" + "Post Nº : " + (i + 1) + " - " + title + "</h5>" +
                        + "<h5>" + " Posted By : " + author + " <span style='color: #12c4ff ' class='glyphicon glyphicon-time'></span> " + dateTime + "</h5>"
                        + "<h5>" + result + "</h5>"
                        + "</td>"
                }
                table += '</tr></table>';
                document.getElementById('table').innerHTML = table;

                resolve(req.response);
            }else{
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send();
    });

}

document.getElementById('reloadJson').addEventListener("click",getInfo());

request.onreadystatechange = getInfo();

request.send();

