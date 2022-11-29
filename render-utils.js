export function renderItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add(item.complete ? 'complete' : 'incomplete');
    div.classList.add('item');

    p.textContent = item.item;

    div.append(p);

    return div;
}
