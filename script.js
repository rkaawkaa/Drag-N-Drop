const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    this.classList.add('onair')
}
function dragEnd() {
    this.classList.remove('onair')
}

empties.forEach(empty => {
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('drop', dragDrop);
})

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered')
}
function dragLeave() {
    this.classList.remove('hovered')
}

function dragDrop() {
    this.classList.remove('hovered')
    this.append(fill)
}
    
function dragOver(e) {
    e.preventDefault();
}