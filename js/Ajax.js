var request = new XMLHttpRequest();
request.open('GET','https://www.reddit.com/r/gameofthrones/.json', true);

function HTTPAnswer () {

    let table = '';
    let result = '';

    table += '<table id="listTable" border="2" cellspacing="0">';
    if(request.readyState == 4){
        if(request.status == 200){

            let arrayAnswer = JSON.parse(request.responseText);
            let dataAnswer = arrayAnswer["data"]["children"];

            for(var i=0; i < dataAnswer.length; i++){
                let title = dataAnswer[i]["data"]["title"];
                let url = dataAnswer[i]["data"]["url"];
                result = url.link(url)
                table += "<tr>" +" <h3>" + "Post Nº : " + (i +1) + " - " + title +"</h3> " + result  +"</td></tr>";
            }
            table += '</table><br>';

        }else{
            console.log("Error loading page\n");
        }
        document.getElementById('listTable').innerHTML = table;
    }};

request.onreadystatechange = HTTPAnswer;

request.send();
