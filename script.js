const moments = [
  {
    text: "19 May.\nWe spoke for the first time on Instagram.\nI didn’t know a conversation could feel this important.",
    image: "images/insta-text.jpg"
  },
  {
    text: "I had seen you for almost a year.\nBut after we spoke,\nthis felt like the first time I really saw you."
  },
  {
    text: "23 May.\nOur first date at IKEA.\nIt wasn’t perfect, but it was honest and real.",
    image: "images/ikea.jpg"
  },
  {
    text: "29 May.\nAn RCB screening surrounded by noise.\nSomehow, holding your hand felt calmer than everything else.",
    image: "images/rcb.jpg"
  },
  {
    text: "30 May.\nThe first hug.\nIt wasn’t rushed.\nIt just felt safe."
  },
  {
    text: "2 June.\nOur first kiss.\nSome moments don’t need pictures to stay forever."
  },
  {
    text: "4 June.\nAn unplanned night after RCB won.\nCold hills, shy smiles, and sitting closer than planned.",
    image: "images/night-out.jpg"
  },
  {
    text: "18 June.\nI came to your house with breakfast.\nSurprising you took courage, but it felt worth it.",
    image: "images/breakfast.jpg"
  },
  {
    text: "14 July.\nYou thought I already was your girlfriend.\nI needed you to ask.\nAnd you did, nervously and perfectly."
  },
  {
    text: "5 October.\nWe met after two long months.\nYou came with a bouquet, and everything felt easy again.",
    image: "images/bouquet.jpg"
  },
  {
    text: "9 November.\nVodka, laughter, and both of us a little tipsy.\nIt was fun, but more than that, it felt safe.",
    image: "images/drinks.jpg"
  },
  {
    text: "1 January.\nI ran to you at midnight to surprise you.\nTaking care of you felt natural, like something I could do forever.",
    image: "images/newyear.jpg"
  },
  {
    text: "Some stories don’t end here.\nThey just keep going,\none small moment at a time."
  }
];

let index = 0;

function nextMoment() {
  const momentDiv = document.getElementById("moment");
  const photo = document.getElementById("photo");

  momentDiv.style.animation = "none";
  void momentDiv.offsetWidth;
  momentDiv.style.animation = "fadeIn 1.5s forwards";

  momentDiv.textContent = moments[index].text;

  if (moments[index].image) {
    photo.src = moments[index].image;
    photo.style.display = "block";
  } else {
    photo.style.display = "none";
  }

  index = (index + 1) % moments.length;
}

nextMoment();
