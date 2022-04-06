new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["4/11", "4/12", "4/13", "4/14", "4/15", "4/16", "4/17"],
      datasets: [
        {
          label: "Number of Calories",
          backgroundColor: ["#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7","#8e95e7", "#8e95e7"],
          data: [2000, 2005, 1823, 2349, 2312, 1923, 2032]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Weekly Number of Calories'
      }
    }
});


