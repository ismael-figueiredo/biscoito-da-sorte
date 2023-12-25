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

const frases = {
  1: "A vida trará coisas boas se tiver paciência.",
  2: "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  3: "Não compense na ira o que lhe falta na razão.",
  4: "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  5: "A maior de todas as torres começa no solo.",
  6: "Não há que ser forte. Há que ser flexível.",
  7: "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  8: "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  9: "A juventude não é uma época da vida, é um estado de espírito.",
  10: "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  11: "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  12: "Siga os bons e aprenda com eles.",
  13: "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  14: "O bom-senso vale mais do que muito conhecimento.",
  15: "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  16: "São os nossos amigos que nos ensinam as mais valiosas lições.",
  17: "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  18: "A adversidade é um espelho que reflete o verdadeiro eu.",
  19: "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  20: "Uma bela flor é incompleta sem as suas folhas.",
  21: "Sem o fogo do entusiasmo, não há o calor da vitória.",
  22: "O riso é a menor distância entre duas pessoas.",
  23: "Os defeitos são mais fortes quando o amor é fraco.",
  24: "Amizade e Amor são coisas que se unem num piscar de olhos.",
  25: "Surpreender e ser surpreendido é o segredo do amor.",
  26: "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  27: "A paciência na adversidade é sinal de um coração sensível.",
  28: "A sorte favorece a mente bem preparada.",
  29: "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  30: "Quem olha para fora sonha; quem olha para dentro acorda.",
  31: "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
  32: "Espere pelo mais sábio dos conselhos: o tempo.",
  33: "Todas as coisas são difíceis antes de se tornarem fáceis.",
  34: "Se você se sente só é porque construiu muros ao invés de pontes.",
  35: "Vencer é 90 por cento suor e 10 por cento de engenho.",
  36: "O amor está sempre mais próximo do que você imagina.",
  37: "Você é do tamanho do seu sonho.",
  38: "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
  39: "O conhecimento é a única virtude e a ignorância é o único vício.",
  40: "O nosso primeiro e último amor é… o amor-próprio.",
  41: "Deixe de lado as preocupações e seja feliz.",
  42: "A vontade das pessoas é a melhor das leis.",
  43: "Nós somos o que pensamos.",
  44: "A maior barreira para o sucesso é o medo do fracasso.",
  45: "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  46: "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.",
  47: "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
  48: "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  49: "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
  50: "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  51: "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.",
  52: "Motivação não é sinónimo de transformação, mas um passo em sua direção.",
  53: "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé, motivação e criatividade.",
  54: "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  55: "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.",
  56: "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
  57: "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera.",
  58: "Acredite em milagres, mas não dependa deles.",
  59: "Você sempre será a sua melhor companhia!",
  60: "Realize o óbvio, pense no improvável e conquiste o impossível.",
}


document.getElementById("cookie-closed").addEventListener("click", () => {
  const contentElement = document.getElementById("content")

  function getRandomPhrase() {
    const totalPhrases = 60
    const randomIndex = Math.floor(Math.random() * totalPhrases) + 1
    return frases[randomIndex]
  }

  contentElement.textContent = getRandomPhrase()
})
