function createElement(tagName, attributes, text) {
  var element = document.createElement(tagName);
  
  if (attributes) {
    for (var key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
  }
  
  if (text) {
    var textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }
  
  return element;
}

// Membuat elemen dengan atribut class dan teks di dalamnya

// contoh = var div = createElement("div", { class: "my-class" }, "Hello, world!");