// autotype effect
const profile = document.querySelector("#profile");
const profileTexts = [
    "Web Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "Language Learner",
];

function autoType(element, text, i = 1) {
    setInterval(() => {
        element.textContent = text[i];
        i++;
        if (i === text.length) {
            i = 0;
        }
    }, 4000);
}

autoType(profile, profileTexts);
