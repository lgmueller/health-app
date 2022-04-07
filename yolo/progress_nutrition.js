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

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    text: "Weeks",
    labels: ['Week 1','Week 2','Week 3','Week 4'],
    datasets: [{ 
        label: "Number of Calories",
        data: [2192,2239, 2432, 2499],
        borderColor: "#8e95e7",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Monthly Calorie Count'
    }
  }
});


