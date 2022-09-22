export default function getNewTableValues() {
    const firstInput = document.querySelector('.firstInput');
    const secondInput = document.querySelector('.secondInput');
    const thirdInput = document.querySelector('.thirdInput');
    const fourthInput = document.querySelector('.fourthInput');

    return {
        firstInputValue: firstInput.value,
        secondInputValue: secondInput.value,
        thirdInputValue: thirdInput.value,
        fourthInputValue: fourthInput.value
    }
}