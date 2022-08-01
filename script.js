let outcontainer = document.createElement("div");
outcontainer.setAttribute("id", "outcontainer");
outcontainer.innerHTML = `
<h2 class="head com">Probability of names</h2>
            <p class="con_id1 com">Country Code 1</p>
            <p class="probability1 com">Probability</p>
            <p class="con_id2 com">Country Code 2</p>
            <p class="probability2 com">Probability</p>
    `

document.body.append(outcontainer);

async function nation() {
    let inp = document.querySelector("#input").value;
    console.log(inp);
    let inpUrl = await fetch(`https://api.nationalize.io?name=${inp}`)
    let result = await inpUrl.json();
    let details = result.country;
    console.log("res",details);
    document.querySelector(`.head`).innerText = `Probability of names:${inp}`
    //let countryId = result.country_id;
    // for(let values in details){
    //     console.log(values.countryId);
    //     //document.querySelector(".con_id").innerText = values.countryId;
    // }
    for(let i = 0; i < details.length; i++){
        let c = details[i].country_id;
        let d = details[i].probability;
        console.log(c);
        document.querySelector(`.con_id${i+1}`).innerText = `${c}`;
        document.querySelector(`.probability${i+1}`).innerText = `${d}`;
    }
    // details.forEach(element => { 
    //     let c = element.country_id;
    //     let d = element.probability;
    //     console.log(c);
    //     document.querySelector(".con_id").innerText = `${c}`;
    //     document.querySelector(".probability").innerText = `${d}`;
    // });
    
}
