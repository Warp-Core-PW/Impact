const apiUrl =
  "https://api.github.com/repos/Plugin-Warp/Plugin-Warp.github.io/contents/extensions";

const SearchField = document.querySelector(".SearchField");

function ReportErrorOnPage() {
  const ErrorMessage = document.createElement("h5");
  ErrorMessage.style =
    "color: #F54156; text-align: center; font-size: 30px; padding: 20px";
  ErrorMessage.textContent = "Failed to fetch extensions :(";
  document.body.insertBefore(ErrorMessage, document.querySelector(".Footer"));
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

// Helper to create and add a list item
function AddListItem(item, fileTree, ExtAuthor) {
  const listItem = document.createElement("li");
  listItem.classList.add(item.type);
  listItem.classList.add(item.type === "dir" ? "folder" : "file");
  listItem.textContent = item.name;
  listItem.id = item.path;

  if (ExtAuthor) {
    const listItemCredits = document.createElement("p");
    listItemCredits.classList.add("ExtCredits");
    listItemCredits.innerHTML = ExtAuthor;
    listItem.appendChild(listItemCredits);
  }

  if (item.type === "dir") {
    listItem.addEventListener("click", () => toggleFolder(listItem, listItem.id));
    const subfolder = document.createElement("ul");
    subfolder.classList.add("subfolder");
    listItem.appendChild(subfolder);
  } else {
    listItem.addEventListener("click", () => Onclick(listItem.id));
  }

  fileTree.appendChild(listItem);
}

// Fetch and display the directory structure (including external links from .author files)
async function displayRepoContents(path = "") {
  const data = await fetchrepocontents(
    "https://api.github.com/repos/Plugin-Warp/Plugin-Warp.github.io/contents/" +
      path
  );
  if (data === null) return;

  const fileTree = document.getElementById("file-tree");
  const spinner = document.getElementById("spinner");
  fileTree.innerHTML = ""; // Clear previous content

  // Array to hold external extensions from .author files
  let externalExtensions = [];
  // Mapping of external file download_url -> default author (from .author filename)
  let externalAuthorMapping = {};

  // Process .author files in the current directory
  const authorFiles = data.filter(
    (item) => item.type === "file" && item.name.endsWith(".author")
  );

  await Promise.all(
    authorFiles.map(async (authorFile) => {
      try {
        const response = await fetch(authorFile.download_url);
        if (response.ok) {
          const text = await response.text();
          const lines = text.split("\n");
          // Derive the default author name from the .author file name
          const authorName = authorFile.name.replace(".author", "");
          lines.forEach((line) => {
            const trimmed = line.trim();
            // Only process non-empty lines that start with "https://"
            if (trimmed && trimmed.startsWith("https://")) {
              // Create an object similar to GitHub API items
              let extItem = {
                type: "file",
                // Extract filename from the URL
                name: new URL(trimmed).pathname.split("/").pop() || trimmed,
                download_url: trimmed,
                path: trimmed, // using the URL as the unique path identifier
              };
              externalExtensions.push(extItem);
              externalAuthorMapping[trimmed] = authorName;
            }
          });
        } else {
          console.error(
            `Failed to fetch .author file from ${authorFile.download_url}`
          );
        }
      } catch (error) {
        console.error(`Error processing .author file: ${error}`);
      }
    })
  );

  // Process internal items (skip .author files so they don't appear directly)
  if (Array.isArray(data)) {
    for (const item of data) {
      if (item.type === "file" && item.name.endsWith(".author")) continue;

      let author = "unknown"; // default value

      // For files, try to fetch content to check for an inline // AUTHOR: comment
      if (item.type === "file" && item.download_url) {
        try {
          const response = await fetch(item.download_url);
          if (response.ok) {
            const text = await response.text();
            let firstLine = text.split("\n")[0];
            firstLine = firstLine.replace(/^\uFEFF/, "").trim();
            const match = firstLine.match(/^\/\/\s*AUTHOR:\s*(.+)$/);
            if (match) {
              author = match[1].trim();
            }
          } else {
            console.error(
              `Failed to fetch file content from ${item.download_url}`
            );
          }
        } catch (error) {
          console.error(`Error fetching file content: ${error}`);
        }
      }
      // Add the internal file item to the file tree
      AddListItem(item, fileTree, author);
    }
  }

  // Process external extensions from the .author files
  for (const extItem of externalExtensions) {
    // Default author is from the .author file
    let author = externalAuthorMapping[extItem.download_url] || "unknown";
    // Try fetching the extension content to see if it contains an inline override
    try {
      const response = await fetch(extItem.download_url);
      if (response.ok) {
        const text = await response.text();
        let firstLine = text.split("\n")[0];
        firstLine = firstLine.replace(/^\uFEFF/, "").trim();
        const match = firstLine.match(/^\/\/\s*AUTHOR:\s*(.+)$/);
        if (match) {
          author = match[1].trim();
        }
      } else {
        console.error(
          `Failed to fetch external file content from ${extItem.download_url}`
        );
      }
    } catch (error) {
      console.error(`Error fetching external file content: ${error}`);
    }
    // Add the external extension item to the file tree
    AddListItem(extItem, fileTree, author);
  }

  // Add Back Button if not at the root 'extensions' directory
  if (path !== "extensions") {
    const listItem = document.createElement("li");
    listItem.classList.add("backbutton");
    listItem.textContent = "Back";
    listItem.addEventListener("click", () => displayRepoContents("extensions"));
    fileTree.appendChild(listItem);
  }

  spinner.style.display = "none";
}

// Toggle folder visibility
function toggleFolder(folderElement, path) {
  folderElement.classList.toggle("expanded");
  const subfolder = folderElement.querySelector(".subfolder");
  if (subfolder) {
    displayRepoContents(path);
  }
}

function OnSearch() {
  const SearchQuery = SearchField.value.toLowerCase();
  const Items = document.getElementById("file-tree").children;
  Array.from(Items).forEach(function (listItem) {
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
