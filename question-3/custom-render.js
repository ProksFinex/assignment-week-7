// step1
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        children:'click me to visit google',
    }
};

//step 2
function createHTML(reactElement){
    const{type,props}=reactElement;

    //construct the html tag as an HTML string 
    return `<${type} href="${props.href}">${props.children}</${type}>`
}

//step3

function customRender(reactElement,containerId){

    const container=document.getElementById(containerId);

    const htmlString= createHTML(reactElement);

    container.innerHTML = htmlString;
}

customRender(reactElement,"root");
