interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  constructor(private text : string) {
  }
  print() {
    console.log(this.text);
  }
}
class DomElement implements IDomElement {
  elements: IDomElement[];

  constructor(public elementName : string, public textContent?: string) {
    this.elements = [];
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.elementName}>`);
    if (this.textContent) {
      console.log(this.textContent);
    }
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}

let text1 = new DomElement("p");
let text2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

text1.add(new TextNode("Hi, I am a TextNode being printed!"));
text2.add(new TextNode("TextNode == leaf"));
div.add(text1);
div.add(text2);
html.add(div);
html.print();