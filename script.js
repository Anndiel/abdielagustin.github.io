fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // Metrics
    document.getElementById("years").textContent = data.years_experience;
    document.getElementById("integrations").textContent = data.integrations_delivered;
    document.getElementById("clients").textContent = data.clients_supported;
    document.getElementById("countries").textContent = data.countries_supported;

    // Projects
    const projectList = document.getElementById("projects");
    data.projects.forEach(project => {
      const li = document.createElement("li");
      li.textContent = project;
      projectList.appendChild(li);
    });

    // Chart
    const ctx = document.getElementById('techChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(data.tech_distribution),
        datasets: [{
          data: Object.values(data.tech_distribution),
          backgroundColor: [
            "#0d3b66",
            "#1d70b8",
            "#3a86ff",
            "#90caf9"
          ]
        }]
      }
    });

  });
