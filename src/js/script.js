// autotype profile
const profile = document.querySelector("#profile");
const profileTexts = [
  "Web Developer",
  "Full-Stack Developer",
  "Language Learner",
];

function autoType(
  element,
  texts,
  wordIndex = 0,
  charIndex = 0,
  isDeleting = false,
) {
  const currentWord = texts[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  element.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    setTimeout(() => autoType(element, texts, wordIndex, charIndex + 1), 200);
    element.classList.remove("after:animate-blink");
  } else if (isDeleting && charIndex > 0) {
    setTimeout(
      () => autoType(element, texts, wordIndex, charIndex - 1, isDeleting),
      100,
    );
    element.classList.remove("after:animate-blink");
  } else {
    if (isDeleting) {
      setTimeout(
        () =>
          autoType(
            element,
            texts,
            (wordIndex + 1) % texts.length,
            charIndex,
            !isDeleting,
          ),
        1000,
      );
    } else {
      setTimeout(
        () => autoType(element, texts, wordIndex, charIndex, !isDeleting),
        2000,
      );
    }
    element.classList.add("after:animate-blink");
  }
}
autoType(profile, profileTexts);

// toggle hamburger menu
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");

document.addEventListener("click", (e) => {
  if(hamburger.contains(e.target)) {
    nav.classList.toggle("hidden");
  }
  
  // close menu
  if(!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.add("hidden");
  }
});
