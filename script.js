let complaintId = 505;

document
  .getElementById("complaintForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;
    const urgency = document.querySelector(
      'input[name="urgency"]:checked',
    ).value;

    const table = document
      .getElementById("complaintTable")
      .querySelector("tbody");

    const newRow = `
        <tr>
            <td>${complaintId++}</td>
            <td>${title}</td>
            <td>${location}</td>
            <td>${urgency}</td>
            <td><span class="badge badge-pending">Pending</span></td>
        </tr>
    `;

    table.innerHTML += newRow;

    this.reset();
  });


    
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");

        document.getElementById("notifyBtn").onclick = () => {
            sidebar.classList.add("active");
            overlay.classList.add("show");
        };

        document.getElementById("closeBtn").onclick = closeSidebar;
        overlay.onclick = closeSidebar;

        function closeSidebar() {
            sidebar.classList.remove("active");
            overlay.classList.remove("show");
        }

        document.addEventListener("keydown", e => {
            if (e.key === "Escape") closeSidebar();
        });

