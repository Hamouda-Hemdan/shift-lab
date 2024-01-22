const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const table = document.getElementById('dataTable');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', searchTable);

function searchTable() {
  const searchText = searchInput.value.trim().toLowerCase();
  const cells = table.getElementsByTagName('td');
  let count = 0;

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const cellText = cell.textContent.toLowerCase();

    if (cellText.includes(searchText)) {
      cell.classList.add('highlight');
      count++;
    } else {
      cell.classList.remove('highlight');
    }
  }

  if (count > 0) {
    resultsDiv.textContent = `Matches found: ${count}`;
  } else {
    resultsDiv.textContent = 'Nothing found';
  }
}