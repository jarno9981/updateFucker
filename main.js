(() => {
  if (window.randomColorInterval) {
    clearInterval(window.randomColorInterval);
  }

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, "0");

  function changeColors() {
    document.querySelectorAll("*").forEach((el) => {
      const style = getComputedStyle(el);

      if (style.backgroundColor !== "rgba(0, 0, 0, 0)") {
        el.style.setProperty(
          "background-color",
          randomColor(),
          "important"
        );
      }

      if (style.color) {
        el.style.setProperty("color", randomColor(), "important");
      }

      if (
        parseFloat(style.borderTopWidth) > 0 ||
        parseFloat(style.borderBottomWidth) > 0 ||
        parseFloat(style.borderLeftWidth) > 0 ||
        parseFloat(style.borderRightWidth) > 0
      ) {
        el.style.setProperty("border-color", randomColor(), "important");
      }
    });
  }

  changeColors();
  window.randomColorInterval = setInterval(changeColors, 1000);

  console.log("Random color changer started! Run clearInterval(window.randomColorInterval) to stop.");
})();