new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["3/10", "3/11", "3/12", "3/13", "3/14", "3/15"],
      datasets: [
        {
          label: "Number of Calories",
          backgroundColor: ["#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7","#8e95e7"],
          data: [2000, 2005, 1823, 2349, 2312, 1923]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Number of Calories'
      }
    }
});


