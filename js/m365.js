function showService(event, service) {

  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {
    email: [
      { title: "Custom Email", points: ["Domain setup", "Professional mail"] },
      { title: "Security", points: ["Spam protection", "Safe login"] }
    ],
    teams: [
      { title: "Meetings", points: ["Video calls", "Recording"] },
      { title: "Channels", points: ["Team structure", "Chat system"] }
    ],
    sharepoint: [
      { title: "Documents", points: ["Storage", "Access control"] },
      { title: "Automation", points: ["Workflow", "Approvals"] }
    ],
    onedrive: [
      { title: "Storage", points: ["Cloud save", "Backup"] },
      { title: "Sync", points: ["Multi-device", "Real-time"] }
    ]
  };

  const container = document.getElementById("service-details");
  container.innerHTML = "";

  data[service].forEach(item => {
    const box = document.createElement("div");
    box.className = "box";

    const h3 = document.createElement("h3");
    h3.innerText = item.title;

    const ul = document.createElement("ul");

    item.points.forEach(p => {
      const li = document.createElement("li");
      li.innerText = p;
      ul.appendChild(li);
    });

    box.appendChild(h3);
    box.appendChild(ul);
    container.appendChild(box);
  });
}
