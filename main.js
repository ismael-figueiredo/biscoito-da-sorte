import { frases } from "./content.js"

// váriaveis
const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")
const button = document.querySelector("#open-new")
const content = document.querySelector("#content")

const cookieClosed = document.querySelector("#cookie-closed")

function openPage2() {
  page1.classList.add("hidden")
  page2.classList.remove("hidden")
}
function openPage1() {
  page1.classList.remove("hidden")
  page2.classList.add("hidden")
}

cookieClosed.addEventListener("click", openPage2)
button.addEventListener("click", openPage1)



document.getElementById("cookie-closed").addEventListener("click", () => {
  const contentElement = document.getElementById("content")

  function getRandomPhrase() {
    const totalPhrases = 60
    const randomIndex = Math.floor(Math.random() * totalPhrases) + 1
    return frases[randomIndex]
  }

  contentElement.textContent = getRandomPhrase()
})
