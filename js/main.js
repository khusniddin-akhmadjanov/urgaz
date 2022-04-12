var sorted = [];

var info = {
  month: "Dekabr",
  top: [
    "&#8470;",
    "Stanok",
    "Norma atqi",
    "jami",
    "foiz",
    "1-smena",
    "2-smena",
    "3-smena",
  ],
  main: [
    [9, 816000, 71524, 88.1, 245863, 302154, 8796512],
    [22, 52400, 744, 84, 245863, 302154, 8796512],
    [20, 485522, 871524, 45, 245863, 302154, 8796512],
    [6, 415245, 45224, 74, 245863, 302154, 8796512],
    [2, 452145, 65524, 74.1, 245863, 302154, 8796512],
    [21, 857450, 85524, 52.1, 245863, 302154, 8796512],
    [14, 862250, 41524, 52.4, 245863, 302154, 8796512],
    [3, 124500, 12544, 15, 245863, 302154, 8796512],
    [7, 854800, 78524, 41.1, 245863, 302154, 8796512],
    [11, 7458000, 41524, 57.1, 245863, 302154, 8796512],
    [12, 884755, 14524, 19.4, 245863, 302154, 8796512],
    [23, 142547, 521424, 81, 245863, 302154, 8796512],
    [15, 524854, 71524, 70.1, 245863, 302154, 8796512],
    [13, 632598, 52424, 47.1, 245863, 302154, 8796512],
    [8, 454758, 4124, 85.1, 245863, 302154, 8796512],
    [4, 412547, 71524, 48.1, 245863, 302154, 8796512],
    [5, 425144, 41524, 45.6, 245863, 302154, 8796512],
    [10, 785478, 48524, 27.1, 245863, 302154, 8796512],
    [24, 412541, 87524, 61.7, 245863, 302154, 8796512],
    [19, 145451, 74524, 85.4, 245863, 302154, 8796512],
    [17, 415241, 14524, 57.7, 245863, 302154, 8796512],
    [16, 874587, 125524, 88.3, 245863, 302154, 8796512],
    [1, 745874, 87524, 47.1, 245863, 302154, 8796512],
    [18, 78540, 854524, 78.9, 245863, 302154, 8796512],
  ],
};

var monthNames = document.querySelector(".month");
var table = document.querySelector(".table");
var tableHeader = document.querySelector(".table_thead");
var tableBody = document.querySelector(".table_tbody");
var theadRow = document.querySelector(".thead_tr");

monthNames.innerHTML = info.month;

for (let i = 0; i < info.top.length; i++) {
  var theadTd = document.createElement("th");
  theadRow.appendChild(theadTd);
  theadTd.innerHTML = info.top[i];
}

for (let k = 0; k < info.main.length; k++) {
  var tbodyRow = document.createElement("tr");
  tableBody.appendChild(tbodyRow);

  info.main[k].unshift(k + 1);
  for (let j = 0; j < info.main[k].length; j++) {
    var tbodyRowItem = document.createElement("td");
    tbodyRow.appendChild(tbodyRowItem);
    tbodyRowItem.innerHTML = info.main[k][j];
  }

  sorted.push(info.main[k][4], info.main[k][1]);
}

// sort for diagram start

var sortedPersent = [];
var sortedNumbered = [];
for (var n = 0; n < sorted.length; n++) {
  if (n % 2 == 0) {
    sortedPersent.push(sorted[n]);
  }
}

for (var m = 0; m < sorted.length; m++) {
  if (m % 2 !== 0) {
    sortedNumbered.push(sorted[m]);
  }
}

const labels = sortedNumbered;

const data = {
  labels: labels,
  datasets: [
    {
      label: info.month,
      data: sortedPersent,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      subtitle: {
        display: true,
        text: "Stanoklarning foizlardagi ifodasi",
      },
    },
  },
};
