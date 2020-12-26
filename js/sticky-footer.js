window.addEventListener("load", activateStickyFooter);

function activateStickyFooter() {
  adjustFooterCssTopToSticky();  
  window.addEventListener("resize", adjustFooterCssTopToSticky);
}

function adjustFooterCssTopToSticky() {
  var footer = document.querySelector("#footer");
  var bounding_box = footer.getBoundingClientRect();
  var footer_height = bounding_box.height;
  var window_height = window.innerHeight;
  var above_footer_height = bounding_box.top - getCssTopAttribute(footer);
  
  if (above_footer_height + footer_height <= window_height) {
    var new_footer_top = window_height - (above_footer_height + footer_height);
    footer.style.top = new_footer_top + "px";
  } else if (above_footer_height + footer_height > window_height) {
    footer.style.top = null;
  }
}

function getCssTopAttribute(htmlElement) {
  var top_string = htmlElement.style.top;
  if (top_string === null || top_string.length === 0) {
    return 0;
  }
  var extracted_top_pixels = top_string.substring(0, top_string.length - 2);
  return parseFloat(extracted_top_pixels);
}