const secondsHand = document.querySelector(".hand-sec");
const hoursHand = document.querySelector(".hand-hour");
const minutesHand = document.querySelector(".hand-min");

setInterval(secondHandler, 1000);

function secondHandler() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `translateY(150px) translateX(50px) rotate(${secondsDegrees}deg)`;
}
