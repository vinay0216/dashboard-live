const menuToggle = document.getElementById('menuToggle'); 
const sidebar = document.getElementById('sidebar');

// Toggle sidebar visibility on menu button click
menuToggle.addEventListener('click', () => {
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('show');
  } else if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    sidebar.classList.add('collapsed');
  } else {
    sidebar.classList.add('show');
  }
});

// Optional: Sidebar hover behavior
sidebar.addEventListener('mouseover', () => {
  if (!sidebar.classList.contains('show')) {
    sidebar.className = 'sidebar show';
  }
});

sidebar.addEventListener('mouseout', () => {
  if (!sidebar.classList.contains('collapsed')) {
    sidebar.className = 'sidebar collapsed';
  }
});

// Submenu toggle functionality
document.querySelectorAll(".drop-icon").forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    e.preventDefault();

    const parentLi = this.closest('li');

    // Collapse any open submenu except the one clicked
    document.querySelectorAll('.sidebar li').forEach(li => {
      if (li !== parentLi) {
        li.classList.remove('active');
        const openSubMenu = li.querySelector('.submenu');
        if (openSubMenu) openSubMenu.classList.remove('show');
      }
    });

    // Toggle current submenu
    const subMenu = parentLi.querySelector('.submenu');
    if (subMenu) {
      subMenu.classList.toggle('show');
      parentLi.classList.toggle('active');
    }
  });
});





  const fileInput = document.getElementById("formFile");
  const defaultView = document.getElementById("defaultView");
  const fileView = document.getElementById("fileView");
  const fileNameText = document.getElementById("fileName");
  const fileSizeText = document.getElementById("fileSize");

  fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      // Show file details
      fileNameText.textContent = file.name;
      fileSizeText.textContent = Math.round(file.size / 1024) + " KB";

      // Toggle views
      defaultView.classList.add("d-none");
      fileView.classList.remove("d-none");
    }
  });

  function resetUpload() {
    // Clear input
    fileInput.value = "";

    // Toggle back
    fileView.classList.add("d-none");
    defaultView.classList.remove("d-none");
  }
