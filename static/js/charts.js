// Function to handle registration
if (document.getElementById("register-form")) {
  document
    .getElementById("register-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Perform registration logic here
      // For demonstration, we'll just redirect to the login page
      window.location.href = "login.html";
    });
}

// Function to handle login on the login page
if (document.getElementById("login-form")) {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Perform login logic here
      // For demonstration, we'll just redirect to the user profile page
      window.location.href = "profile.html";
    });
}

// Function to handle logout on the profile page
function logout() {
  // Perform logout logic here
  // For demonstration, we'll just redirect to the home page
  window.location.href = "index.html";
}

// Function to render a stock chart
function renderStockChart(canvasId, stockData) {
  const canvas = document.getElementById(canvasId);
  if (canvas) {
    const ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: stockData.labels, // Array of labels (e.g., dates)
        datasets: [
          {
            label: stockData.symbol,
            data: stockData.prices, // Array of prices
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}

// Example usage with dummy data
const aaplData = {
  symbol: "AAPL",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [188, 186, 180, 171, 173, 168],
};

const nvdaData = {
  symbol: "NVDA",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [492, 630, 822, 903, 875, 884],
};

const msftData = {
  symbol: "MSFT",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [375, 408, 415, 427, 414, 407],
};

const intcData = {
  symbol: "INTC",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [47, 43, 43, 44, 36, 32],
};

const googData = {
  symbol: "GOOG",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [139, 142, 138, 156, 156, 165],
};

const amznData = {
  symbol: "AMZN",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [149, 159, 178, 180, 183, 194],
};

const tslaData = {
  symbol: "TSLA",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [248, 188, 202, 175, 161, 157],
};

const metaData = {
  symbol: "META",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [346, 394, 502, 491, 502, 508],
};

const amdData = {
  symbol: "AMD",
  labels: ["January", "February", "March", "April", "May", "June"],
  prices: [138, 170, 202, 183, 160, 168],
};

// Render the chart after the page has loaded
window.onload = function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    renderStockChart("stock-chart-aapl", aaplData);
    renderStockChart("stock-chart-nvda", nvdaData);
    renderStockChart("stock-chart-msft", msftData);
    renderStockChart("stock-chart-intc", intcData);
    renderStockChart("stock-chart-goog", googData);
    renderStockChart("stock-chart-amzn", amznData);
    renderStockChart("stock-chart-meta", metaData);
    renderStockChart("stock-chart-tsla", tslaData);
    renderStockChart("stock-chart-amd", amdData);
  }
};
