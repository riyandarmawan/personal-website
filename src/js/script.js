// autotype effect
const name = document.querySelector("#name");
const texts = ["Riyan Darmawan.", "リヤン・ダールマワン。"];
let indexText = 0;

function autoType(element, text, i = 0, deleting = false) {
    if (i === 0 && !deleting) {
        element.textContent = "";
    }

    if (!deleting) {
        element.textContent += text[i];
    } else {
        element.textContent = text.substring(0, i);
    }

    if (!deleting && i === text.length - 1) {
        setTimeout(() => autoType(element, text, i, true), 1000); // Wait before deleting
        return;
    }

    if (!deleting && i < text.length - 1) {
        setTimeout(() => autoType(element, text, i + 1), 100);
    } else if (deleting && i > 0) {
        setTimeout(() => autoType(element, text, i - 1, true), 50);
    } else {
        // Switch to the next text after deletion
        indexText = (indexText + 1) % texts.length;
        setTimeout(() => autoType(element, texts[indexText]), 1000); // Wait before typing the next text
    }
}

autoType(name, texts[indexText]);
