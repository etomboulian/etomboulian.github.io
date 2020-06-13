

function insertDetailRow(e) 
{
	let button = document.getElementById(e.id);
	let row = button.parentElement;

	if (!(row.classList.contains("expanded")))
	{	// if the item is not already expanded then get the document and expand it
		let detailsRow = document.createElement('div');

		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'details/' + e.id + '.html');
		xhr.onreadystatechange = function() {

			if(xhr.readyState === 4)
			{
				detailsRow.innerHTML = xhr.responseText;
			}
		}
		xhr.send();	
		row.className += " expanded";
		row.insertAdjacentElement('afterend', detailsRow)
		let arrow = row.childNodes[row.childNodes.length - 2];
		arrow.classList.remove("fa-angle-down")
		arrow.classList.add("fa-angle-up")

	} else  // if expanded, delete the details on a second click
	{
		let detailsRow = document.getElementById(e.id + "-details");
		detailsRow.remove();
		row.classList.remove("expanded");

		let arrow = row.childNodes[row.childNodes.length - 2];
		arrow.classList.remove("fa-angle-up")
		arrow.classList.add("fa-angle-down")
	}
	
}




