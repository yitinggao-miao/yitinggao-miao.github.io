const easterImage = document.getElementById("easter-carousel-image");
const rewardModal = document.getElementById("reward-modal");
const rewardClaim = document.getElementById("reward-claim");

if (window.sessionStorage.getItem("easterUnlocked") !== "true") {
  window.location.replace("index.html");
} else if (rewardModal) {
  window.setTimeout(() => {
    rewardModal.hidden = false;
    rewardModal.classList.add("is-open");
  }, 480);
}

if (rewardClaim && rewardModal) {
  rewardClaim.addEventListener("click", () => {
    window.location.href = "weixin://";
    rewardModal.classList.remove("is-open");

    window.setTimeout(() => {
      rewardModal.hidden = true;
    }, 220);
  });
}

if (easterImage) {
  const easterPhotos = easterImage.dataset.photos
    .split(",")
    .map((photo) => photo.trim())
    .filter(Boolean);
  let easterIndex = 0;

  easterPhotos.slice(1).forEach((photo) => {
    const image = new Image();
    image.src = photo;
  });

  if (easterPhotos.length > 1) {
    setInterval(() => {
      easterIndex = (easterIndex + 1) % easterPhotos.length;
      easterImage.classList.add("is-changing");

      window.setTimeout(() => {
        easterImage.src = easterPhotos[easterIndex];
        easterImage.classList.remove("is-changing");
      }, 620);
    }, 3600);
  }
}
