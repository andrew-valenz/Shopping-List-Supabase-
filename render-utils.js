export function renderList(list) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add(list.complete ? 'complete' : 'incomplete');
    div.classList.add('list');

    p.textContent = list.list;

    div.append(p);

    return div;
}
