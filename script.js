const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");
let activeindex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index)=> 
{
    if(links[index].classList.contains("active"))
    {
        light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
    }
    link.addEventListener("click", (e)=>
    {
        activeindex = index;
        let t = setInterval(()=>
        {
            if(activeindex > currentIndex) increment =1;
            else if (activeindex<currentIndex) increment = -1;
            currentIndex += increment;

            links[currentIndex].classList.add("active");
            if(currentIndex != -1)
            {
                links[currentIndex-increment].classList.remove("active");
            }
            if(currentIndex ==activeindex){
                e.target.classList.add("active");
                increment = 0;
                clearInterval(t);
            }
        },50);
        light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
    });
})
