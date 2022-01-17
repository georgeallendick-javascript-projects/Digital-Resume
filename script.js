// time
const today = new Date();
const time = {
  hours: today.getHours(),
  minutes: today.getMinutes(),
  seconds: today.getSeconds()
}

console.log(time);


// text & theme triggers
  if (time.hours >= 17 || time.hours < 5) {
    greeting = "Good night";

    document.getElementById('displayMode1').innerText = "Night mode";
    document.getElementById('displayMode2').innerText = "Day mode";
    document.getElementById('mSwitcher').innerText = "AM";
    document.getElementById('theme').className = "globalDark";
    document.getElementById('main').className = "localDark";
    document.getElementById('dropdown').className = "globalDark";
    document.getElementById('textfield').className = "globalDark";

} else {
    greeting = "Good day";
  
    document.getElementById('displayMode1').innerText = "Day mode";
    document.getElementById('displayMode2').innerText = "Night mode";
    document.getElementById('mSwitcher').innerText = "PM";
    document.getElementById('theme').className = "globalLight";
    document.getElementById('main').className = "localLight";
    document.getElementById('dropdown').className = "globalLight";
    document.getElementById('textfield').className = "globalLight";
  }

console.log(greeting);


// Resume Display
function setResume(){
    //functionality
    var dropdown = document.getElementById("dropdown");
    var resumeSection = dropdown.options     [dropdown.selectedIndex].text; 
    var textField = document.getElementById("textfield");

    //field returns
    const introduction = "👋 Hi, I’m @georgeallendick\n👀 Currently interested in front-end developer roles\n🌱 I've completed Mimo's Web Developer Course encompassing HTML, CSS, Java, and React\n🌱 Some of my Mimo courswork can be found here:\n https://github.com/georgeallendick-coding-school-projects\n🌱 In the process of building Javascript projects here:\n https://github.com/georgeallendick-javascript-projects\n📫 I can be reached through georgeallendickjr@gmail.com";

    const projects = "---Mimo Coursework\n--A collection of projects completed on the way to earning Web Developer certification demonstrating proficiency in HTML, CSS, and Javascript.\n-github.com/georgeallendick-coding-school-projects\n\n---Assorted Javascript\n--Currently building out a number of Javascript projects to demonstrate my proficiency.\n-github.com/georgeallendick-javascript-projects";

    const experience = "Global Energy — Project Manager\nJan 2020 - PRESENT / Roseville, CA\nMove statewide solar projects across all stages of the pipeline, from welcome call to final inspection while communicating with clients.\n\nSunfinity Solar Electric — Project Coordinator\nMay 2019 - Jan 2020 / Roseville, CA\nProcessing new deals, making welcome calls, scheduling site surveys, applying for NTP & PTO while maintaining a 50+ account caseload.\n\nInfinity Energy— Proposal Writer\nSept  2017 - May  2019 / Rocklin, CA\nCreating solar designs utilizing different softwares and crafting proposals to present customers with financing options."

    const skills = "Communication: with a background in creative writing I’ve always stood out for my ability to communicate clearly and effectively.\n\nProject Management: demonstrated ability to handle large and complex tasks on multiple levels at once.\n\nProblem Solving Under Pressure:  previous experience includes hospice and customer service environments where the concerns of patients and clients needed to be soothed in often fraught circumstances."

    const certificates = "- Web Developer certification through Mimo"

    const contact ="- I can be reached at georgeallendickjr@gmail.com\n- Github: github.com/georgeallendick\n- Full resume availiable upon request"


    // textbox displays
    if(resumeSection=="Introduction"){
        textField.value = introduction;
    }
    else if(resumeSection=="Projects"){
        textField.value = projects;
    }   
    else if(resumeSection=="Experience"){
        textField.value = experience;
    }   
    else if(resumeSection=="Skills"){
        textField.value = skills;
    }   
    else if(resumeSection=="Certificates"){
        textField.value = certificates;
    }   
    else if(resumeSection=="Contact"){
        textField.value = contact;
    }   
}