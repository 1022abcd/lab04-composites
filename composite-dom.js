var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var DomElement = (function () {
    function DomElement(elementName, textContent) {
        this.elementName = elementName;
        this.textContent = textContent;
        this.elements = [];
    }
    DomElement.prototype.add = function (element) {
        this.elements.push(element);
    };
    DomElement.prototype.print = function () {
        console.log("<" + this.elementName + ">");
        if (this.textContent) {
            console.log(this.textContent);
        }
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            element.print();
        }
        console.log("</" + this.elementName + ">");
    };
    return DomElement;
}());
var text1 = new DomElement("p");
var text2 = new DomElement("p");
var div = new DomElement("div");
var html = new DomElement("html");
text1.add(new TextNode("Hi, I am a TextNode being printed!"));
text2.add(new TextNode("TextNode == leaf"));
div.add(text1);
div.add(text2);
html.add(div);
html.print();
