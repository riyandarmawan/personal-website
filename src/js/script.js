// autotype profile
const profile = document.querySelector("#profile");
const profileTexts = [
  "Web Developer",
  "Full-Stack Developer",
  "Software Engineer Student",
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
  } else if (isDeleting && charIndex > 0) {
    setTimeout(
      () => autoType(element, texts, wordIndex, charIndex - 1, isDeleting),
      100,
    );
  } else {
    if(isDeleting) {
        setTimeout(() => autoType(element, texts, (wordIndex + 1) % texts.length, charIndex, !isDeleting), 1000);
    } else {
        setTimeout(() => autoType(element, texts, wordIndex, charIndex, !isDeleting), 1000);
    }
  }
}

autoType(profile, profileTexts);
