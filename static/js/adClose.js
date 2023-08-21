const closeBtn = document.getElementById(`adCloseBtn`);
const ad = document.getElementById(`igAd`);

closeBtn.addEventListener(`click`, () => {
    ad.style.display = `none`;
});
