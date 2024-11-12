function renderList(items) {
    const listContainer = document.getElementById('listContainer');
    const listItems = items.map(item => `<li>${item}</li>`).join('');
    listContainer.innerHTML = `<ul>${listItems}</ul>`;
}

renderList(['1', '2', '3', 'sea', 'user', 23]);
