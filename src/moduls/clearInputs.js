export default function clearInputs(inputs) {
    inputs.forEach((item) => {
        const input = document.querySelector(item)
        input.value = ''
    })
}