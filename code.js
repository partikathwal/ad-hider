// YAHOO
if(location.href.includes("yahoo")){
    try{
        document.querySelector("[data-test-id='mail-right-rail']").style.width = 0;
        [...(document.querySelectorAll("div[data-test-id='virtual-list'] a[target='_blank']") || [])].forEach((e) => {
            e.style.display = 'block';
            e.style.height = 0;
        })
    
        let working = false;
    
        if(document.querySelector("div[data-test-id='virtual-list']")){
            document.querySelector("div[data-test-id='virtual-list']").onscroll = () => {
                if(working) return;
        
                working = true;
                setTimeout(() => {
                    [...(document.querySelectorAll("div[data-test-id='virtual-list'] a[target='_blank']") || [])].forEach((e) => {
                        e.style.display = 'block';
                        e.style.height = 0;
                    })
                    working = false;
                }, 1000);
            }
        }
        
    }catch(e){
        //alert(e);
        console.log(e);
    }
}




// TRUEPEOPLE SEARCH
alert(location.href);
if(location.href.includes("truepeople")){
    try {
        [...document.querySelectorAll(".content-center")].forEach(el => {
            el.style.backgroundColor = "white";
            el.style.zIndex = 1;
            el.style.width = "100%";
            el.style.paddingTop = "30px";
        })

        const selectors1 = ["#tps_inside_2", "#tps_inside_1", ".ad-container-bottom", ".fixed-bottom"];
        const selectors2 = [".content-left-side", ".content-right-side"];
        selectors1.forEach(selector => {
            [...document.querySelectorAll(selector)].forEach(el => el.style.overflow = "hidden");
            [...document.querySelectorAll(selector)].forEach(el => el.style.height = 0);
        })
        selectors2.forEach(selector => {
            [...document.querySelectorAll(selector)].forEach(el => el.style.overflow = "hidden");
            [...document.querySelectorAll(selector)].forEach(el => el.style.width = 0);
        })

        setInterval(() => {
            try {
                [...document.querySelectorAll("ins")].forEach(ins => {
                    ins.style.overflow = "hidden";
                    ins.style.height = 0;
                });
            }catch(e){
                alert(e);
            }
        }, 100);
    }catch(e){
        alert(e);
    }
}