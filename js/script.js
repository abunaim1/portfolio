/* ================================== typing animation ==================================== */

var typed = new Typed(".typing", {
    strings:["","Software Engineer", "Django Developer", "Backend Developer", "Web Developer", ],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ================================== Aside ==================================== */

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSelection = document.querySelectorAll(".section"),
      totalSection = allSelection.length;
      for(let i=0; i<totalNavList; i++)
        {
            const a=navList[i].querySelector('a')
            a.addEventListener("click", function()
            {
                removeBackSection()
                for(let j=0; j<totalNavList; j++)
                    {
                        if(navList[j].querySelector('a').classList.contains("active"))
                            {
                                addBackSection(j)
                            }
                        navList[j].querySelector("a").classList.remove("active");
                    }
                this.classList.add("active")
                showSection(this)
                if(window.innerWidth < 1200)
                    {
                        asideSectionTogglerBtn()
                    }
            })
        }
        function removeBackSection ()
        {
            for(let i=0; i<totalSection; i++)
                {
                    allSelection[i].classList.remove("back-section");
                }
        }
        function addBackSection(num)
        {
            allSelection[num].classList.add("back-section")
        }
        function showSection(element)
        {
            for(let i=0; i<totalSection; i++)
                {
                    allSelection[i].classList.remove("active");
                }
            const target = element.getAttribute('href').split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }

function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute('href').split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[i].querySelector("a").classList.add("active");
                }
        }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index")
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn =  document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => 
        {
          asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open")
            for(let i=0; i<totalSection; i++)
                {
                    allSelection[i].classList.toggle("open")
                }
        }


/* ================================== Contact ==================================== */

const sendEmail = (event) => {
event.preventDefault();
const name = getValueFor("name");
const email = getValueFor("email");
const subject = getValueFor("subject");
const message = getValueFor("message");
const info = {
    name,
    email,
    subject,
    message,
};

fetch("https://portfolio-backend-o1rq.onrender.com/contact/mail/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
        alert('You Message Send to the author. Thank you!')
        window.location.href = 'index.html'
    });
};


const getValueFor = (id) => {
const value = document.getElementById(id).value;
return value;
};

/* ================================== Resume Download ==================================== */

const resumeDownload = () =>
    {
        const resumeUrl = 'https://drive.google.com/uc?export=download&id=1A4q8mfJ_GmegsuxKkH55gbnh53e_pG4-';
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Resume.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    }


// https://drive.google.com/file/d/1A4q8mfJ_GmegsuxKkH55gbnh53e_pG4-/view?usp=sharing
