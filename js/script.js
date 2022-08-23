const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSections=allSection.length;
      for(let i=0;i<totalNavList;i++){

        const a=navList[i].querySelector("a")
        a.addEventListener("click",function(){
            for(let i=0;i<totalSections;i++){
                allSection[i].classList.remove("back-section")
            }
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this)
        })
      }


const homeSection=document.querySelector(".home");
homeSection.querySelector("a").addEventListener("click",function(){
    for(let i=0;i<totalSections;i++){
        allSection[i].classList.remove("active")
    }
    document.querySelector("#about").classList.add("active");
    navList[1].querySelector("a").classList.add("active")
    navList[0].querySelector("a").classList.remove("active")
})


function showSection(element){
    for(let i=0;i<totalSections;i++){
        allSection[i].classList.remove("active")
    }
    const target= element.getAttribute("href");
    document.querySelector(target).classList.add("active");

}
