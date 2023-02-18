
var websiteName = document.getElementById("websiteName");
var websiteURL = document.getElementById("websiteURL");
var addSiteBtn = document.getElementById("addSiteBtn");
var siteList;
var vistbtn = document.querySelector("#vistbtn");



function addSite(){
    var sites={
        name:websiteName.value,
        url:websiteURL.value
    }
    siteList.push(sites)
    displaySite(siteList)
    clearForm()
    localStorage.setItem("siteList", JSON.stringify(siteList))
}

function displaySite(sites){
    var cartona= ""
    for(var i=0;i < sites.length; i++){
        cartona +=` <div class="py-4 mb-3 px-2" style="background-color: #eee;">
        <div class="d-flex justify-content-between w-50">
            <h3 class="fw-bold ps-3">${sites[i].name}</h3>
            <div>
                <a href="${siteList[i].url}" id="vistbtn" class="btn-primary px-3 text-decoration-none text-white rounded-2 btn"  target="_blank">visit</a>
                <button onclick="deletSite(${i})" class="btn btn-danger px-3">Delete</button>
            </div>
        </div>
        </div>`
    }
    document.getElementById("bodySites").innerHTML=cartona;
}

function clearForm(){
    websiteName.value="";
    websiteURL.value="";
}


function deletSite(index){
    siteList.splice(index,1)
    localStorage.setItem("siteList", JSON.stringify(siteList))
    displaySite(siteList)
}

if(localStorage.getItem("siteList") == null){
    siteList=[]
}else{
    siteList= JSON.parse(localStorage.getItem("siteList"))
    displaySite(siteList)
}