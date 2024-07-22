const customRender = (reactElement, root) => {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.herf);
    // domElement.setAttribute('target', reactElement.props.target);
    // domElement.setAttribute('id', reactElement.props.id);
    // root.appendChild(domElement);



    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    root.appendChild(domElement);
}
const reactElement = {

    type: 'a',

    props: {
        href: 'https://google.com',
        target: '_blank',
        id: 'container',
        
    },

    children: 'Click me to visit google'
}

const root= document.getElementById('root');

customRender(reactElement, root);