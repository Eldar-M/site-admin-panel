function createDiv(className) {
    const divElement = document.createElement('div');
    divElement.className = className;

    return divElement;
};

function createHeader(header, innerText) {
    const headingElement = document.createElement(header);
    headingElement.innerText = innerText;

    return headingElement;
};

function createSubmitElement(className, innerText) {
    const buttonElement = document.createElement('input');
    buttonElement.type = 'submit';
    buttonElement.className = className;
    buttonElement.value = innerText;

    return buttonElement;
};

function createButtonElement(type, className, innerText) {
    const buttonElement = document.createElement('button');
    buttonElement.type = type;
    buttonElement.className = className;
    buttonElement.innerText = innerText;

    return buttonElement;
};

function createA(className, innerText) {
    const aElement = document.createElement('a');
    aElement.className = className;
    aElement.innerText = innerText;

    return aElement;
};

function createTableElement(className) {
    const tableElement = document.createElement('table');
    tableElement.className = className;

    return tableElement;
};

function createThead(className) {
    const theadElement = document.createElement('thead');
    theadElement.className = className;

    return theadElement;
};

function createTbody(className) {
    const tbodyElement = document.createElement('tbody');
    tbodyElement.className = className;

    return tbodyElement;
};

function createElement(el, child) {
    const element = document.createElement(el);

    if(child){
        element.append(child)
    }

    return element;
};

function createTh(text) {
    const ThElement = document.createElement('th');
    ThElement.innerText = text

    return ThElement;
};

function createTd(text) {
    const TdElement = document.createElement('td');
    TdElement.innerText = text

    return TdElement;
};

function createTr(className) {
    const TrElement = document.createElement('tr');
    TrElement.className = className;

    return TrElement;
};

function createTextInputElement(placeholder, className) {
    const inputElement = document.createElement('input');
    inputElement.type = "text";
    inputElement.placeholder = placeholder;
    inputElement.className = className;

    return inputElement;
};

function createForm(className) {
    const formElement = document.createElement('form');
    formElement.className = className
    return formElement;
};

function createActionElement(callback, element, onDelete) {
    const action = createElement('td')
    const editButton = createA('btn btn-outline-primary edit', 'Edit')
    const deleteButton = createA('btn btn-outline-danger delete', 'Delete')
  
    deleteButton.addEventListener('click', () => callback(element, onDelete))
  
    action.append(editButton, deleteButton)
  
    return action
};

function createOptionElement(value, label){
    const optionElement = document.createElement('option')
    optionElement.setAttribute('value', value)
    optionElement.innerText = label

    return optionElement
}

function createSelectElement(className){
    const selectElement = document.createElement('select')

    selectElement.className = className
    selectElement.setAttribute('aria-label', 'Default select example')

    return selectElement
}

export {createDiv, createActionElement, createSubmitElement, createSelectElement, createOptionElement, createHeader, createForm, createTextInputElement, createButtonElement, createA, createTableElement, createTbody, createThead, createElement, createTh, createTd, createTr}; 