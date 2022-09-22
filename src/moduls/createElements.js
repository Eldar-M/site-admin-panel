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

function createTable(className) {
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

function createElement(el) {
    const element = document.createElement(el);

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

function createForm() {
    const formElement = document.createElement('form');
    return formElement;
};

export {createDiv, createHeader, createForm, createTextInputElement, createButtonElement, createA, createTable, createTbody, createThead, createElement, createTh, createTd, createTr}; 