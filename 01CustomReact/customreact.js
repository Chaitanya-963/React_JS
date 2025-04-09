const mainRoot = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

function render(element, container) {
  //   const domElement = document.createElement(element.type);

  //   domElement.innerHTML = element.children;
  // domElement.setAttribute('href',element.props.href)
  //   domElement.setAttribute('target',element.props.target)

  //   container.appendChild(domElement)

  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for (const prop in element.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

render(reactElement, mainRoot);
