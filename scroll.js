document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onwayTo = null; 
document.addEventListener("scroll", ()=>{
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? "Down" : "Up";
    const sections = [...document.querySelectorAll("section")];
    
    if(document.onwayTo === null){
        const destIndex = direction === "up" ? document.lastCentered -1 : document.lastCentered + 1;
        if(destIndex >= 0 && destIndex < sections.length){
            document.onwayTo = destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        }
    }
    
    sections.forEach((section, index) => {
        if(window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
            section.className = "active";
            if(document.onwayTo === index){
                document.onwayTo = null;
            }
        } else {
            section.className = "";
        }
    });
    document.lastScrollPosition = window.pageYOffset;
    
})