async function getAllElements() {
    let elements;
    await fetch('elements.json')
    .then((res) => elements = res.json());
    return elements;
}

async function getElementByAtomicNumber(atomicNumber) {
    elements = await getAllElements();
    element = elements.filter((element) => element.atomic_number === atomicNumber)
    console.log(element);
}

async function getElementsByPeriod(periodNumber) {
    elements = await getAllElements();
    elements = elements.filter((element) => element.period === periodNumber)
    console.log(elements);
}

async function getElementsByFamily(familyNumber) {
    elements = await getAllElements();
    elements = elements.filter((element) => element.family === familyNumber)
    console.log(elements);
}

getElementByAtomicNumber(3);
getElementsByPeriod(3);
getElementsByFamily(3);
