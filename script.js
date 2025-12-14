async function getAllElements() {
    fetch('elements.json')
    .then((res) => {return res.json()});
}

async function getElementByAtomicNumber(atomicNumber) {
    elements = getAllElements();
    console.log(elements); //.filter((element) => { console.log(element.atomic_number === 1)})
}
// getAllElements();
getElementByAtomicNumber(1);
