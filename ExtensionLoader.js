const apiUrl = "https://api.github.com/repos/Plugin-Warp/Plugin-Warp.github.io/contents/extensions";

const SearchField = document.querySelector(".SearchField");

function ReportErrorOnPage() {
    const ErrorMessage = document.createElement('h5');
    ErrorMessage.style = "color: #F54156; text-align: center; font-size: 30px; padding: 20px";
    ErrorMessage.textContent = "Failed to fetch extensions :(";
    document.body.insertBefore(ErrorMessage, document.querySelector(".Footer"));
}

function getKeyByValue(obj, value) {
    for (const key in obj) {
        if (obj[key].includes(value)) {
            return key; 
        } 
    } 
    return null;
}

async function fetchrepocontents(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        ReportErrorOnPage();
    }
}

function AddListItem(item, fileTree, ExtAuthor) {
    const listItem = document.createElement('li');
    listItem.classList.add(item.type);
    listItem.classList.add(item.type === 'dir' ? 'folder' : 'file');
    listItem.textContent = item.name;
    listItem.id = item.path;

    if (ExtAuthor) {
        const listItemCredits = document.createElement('span');
        listItemCredits.classList.add("ExtCredits");
        listItemCredits.textContent = ExtAuthor;
        listItem.appendChild(listItemCredits);
    }

    if (item.type === 'dir') {
        listItem.addEventListener('click', () => toggleFolder(listItem, listItem.id));
        const subfolder = document.createElement('ul');
        subfolder.classList.add('subfolder');
        listItem.appendChild(subfolder);
    } else {
        listItem.addEventListener('click', () => Onclick(listItem.id));
    }

    fileTree.appendChild(listItem);
}

// Fetch and display the directory structure
async function displayRepoContents(path = '') {
    const data = await fetchrepocontents("https://api.github.com/repos/Plugin-Warp/Plugin-Warp.github.io/contents/" + path);

    if (data === null) {
        return null;
    }

    const fileTree = document.getElementById('file-tree');
    const spinner = document.getElementById('spinner');
    
    // Show spinner while loading
    // spinner.style.display = 'block';
    fileTree.innerHTML = ''; // Clear previous content

    if (Array.isArray(data)) {
        // Use a for...of loop so we can await inside the loop
        for (const item of data) {
            let author = 'unknown'; // default value

            // If the item is a file and has a download URL, fetch its content.
            if (item.type === 'file' && item.download_url) {
                try {
                    const response = await fetch(item.download_url);
                    if (response.ok) {
                        const text = await response.text();
						let firstLine = text.split('\n')[0];
						// Remove BOM and extra whitespace including any trailing \r
						firstLine = firstLine.replace(/^\uFEFF/, '').trim();

						const match = firstLine.match(/^\/\/\s*AUTHOR:\s*(.+)$/);
						console.log(match);
						if (match) {
							author = match[1].trim();
						}

                    } else {
                        console.error(`Failed to fetch file content from ${item.download_url}`);
                    }
                } catch (error) {
                    console.error(`Error fetching file content: ${error}`);
                }
            }
            // Pass the author (extracted or default) into addListItem along with the item and fileTree.
            AddListItem(item, fileTree, author);
        }
    }

    if (path !== 'extensions') {
        // Back Button
        const listItem = document.createElement('li');
        listItem.classList.add('backbutton');
        listItem.textContent = "Back";
        listItem.addEventListener('click', () => displayRepoContents('extensions'));
        fileTree.appendChild(listItem);
    }

    // Hide spinner after loading
    spinner.style.display = 'none';
}


// Toggle folder visibility
function toggleFolder(folderElement, path) {
    folderElement.classList.toggle('expanded');
    const subfolder = folderElement.querySelector('.subfolder');
    if (subfolder) {
        displayRepoContents(path);       
    }
}

function OnSearch() {
    const SearchQuery = SearchField.value.toLowerCase();
    const Items = document.getElementById("file-tree").children;
    Array.from(Items).forEach(function(listItem) {
        if (listItem.id.toLowerCase().includes(SearchQuery)) {
            listItem.hidden = false;
        } else {
            listItem.hidden = true;
        }
    });
}

SearchField.addEventListener("input", OnSearch);

// Initialize the repo viewer
displayRepoContents("extensions");
