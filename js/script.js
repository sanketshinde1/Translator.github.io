const fronttext = document.querySelector(".from-text");
const totext = document.querySelector(".to-text");
const exchange = document.querySelector(".exchange");
const selectTag = document.querySelectorAll("select");
const icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button");


selectTag.forEach((tag, id)=> {
    for(const country_code in countries)
    {
        let selected;
        if( id == 0 && country_code == "en-GB")
        {
            selected = "selected";
        }
        else if(id == 1 && country_code == "hi-IN" )
        {
            selected = "selected";
        }
        // console.log(countries[country_code]);
        let option = `<option value = "${country_code}" ${selected} >${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend",option)
    }
});

exchange.addEventListener("click" , ()=> {
    let temptext     = fronttext.value;
    templang = selectTag[0].value;
    fronttext.value  = totext.value; 
    selectTag[0].value = selectTag[1].value
    totext.value     = temptext ; 
    selectTag[1].value = templang;
});


translateBtn.addEventListener("click",() =>{
   let text = fronttext.value ;
   translatefrom  = selectTag[0].value;
   translateto  = selectTag[1].value;
   let api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefrom}|${translateto}`; 
   fetch(api).then(res => res.json()).then(data => {
    // console.log(data.responseData.translatedText);
    totext.value = data.responseData.translatedText;
   })
}); 

icons.forEach(icons => {
    icons.addEventListener("click",(target) =>{
       console.log(target);
    });
});