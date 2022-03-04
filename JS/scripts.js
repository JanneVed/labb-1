function myFirstEasterEgg() {
    document.getElementById("changeMe").style.background = "red";
}

let phrase = "";
let secondRun = 0;
document.addEventListener('keyup', e => {
    
    if (e.key == 'h')
    {
        phrase += e.key;
    }
    else if (e.key == 'i')
    {
        phrase += e.key
    }
    else if (e.key === 'Escape') {
        phrase = "";
    }
    
    if( phrase == "hi")
    {
        let mySecondEasterEgg = document.createElement("dialog");
        mySecondEasterEgg.className = "hidden-Message";
        document.body.appendChild(mySecondEasterEgg);
        let helloThere = document.createElement("p");
        helloThere.innerHTML = "Hello there." + "<br><br>" + "-Obi-Wan Kenobi" + "<br><br><br>" + "Press Esc to close the dialog";
        mySecondEasterEgg.appendChild(helloThere);
        secondRun++;
        mySecondEasterEgg.showModal();
        phrase = "";
    }
}, false)

const jsonfile = "../JSON/cv.json";

async function GetJson()
{
    const data = await fetch(jsonfile);
    const jsonObj = await data.json();

    //debugger;
    for (let currentObj = 0; currentObj < jsonObj.length; currentObj++)
    {
        // creates the heading element and populate it with the current heading.
        var headingElement = document.createElement("h2");
        headingElement.innerHTML = jsonObj[currentObj].heading;
        document.querySelector(".content").appendChild(headingElement);
        
        // creates a unordered list element and appends it to the div with id cv. No content is being populated
        var ulElement = document.createElement("ul");
        ulElement.classList.add("items", "obj-" + currentObj);
        document.querySelector(".content").appendChild(ulElement);

        for (let currentUl = 0; currentUl < jsonObj[currentObj].ulitems.length; currentUl++)
        {
            var liElement = document.createElement("li");
            liElement.innerHTML = jsonObj[currentObj].ulitems[currentUl].li;
            document.querySelector(".obj-" + currentObj).appendChild(liElement);

            var subUlElement = document.createElement("ul");
            if (currentObj == 0)
            {
                subUlElement.classList.add("sub-items", "work-" + currentUl)
            }
            else if (currentObj == 1)
            {
                subUlElement.classList.add("sub-items", "edu-" + currentUl)
            }
            
            document.querySelector(".obj-" + currentObj).appendChild(subUlElement);
            if (currentObj < 2)
            {
                for (let currentSubUl = 0; currentSubUl < jsonObj[currentObj].ulitems[currentUl].ulsubitems.length; currentSubUl++)
                {
                    var subLiElement = document.createElement("li");
                    subLiElement.innerHTML = jsonObj[currentObj].ulitems[currentUl].ulsubitems[currentSubUl].lisubitem;
                    if (currentObj == 0)
                    {
                        document.querySelector(".work-" + currentUl).appendChild(subLiElement);
                    }
                    else
                    {
                        document.querySelector(".edu-" + currentUl).appendChild(subLiElement);
                    }
                }
            }
        }
    }
};
