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

// Function to fetch stock data for a given symbol
async function fetchStockData(symbol) {
  try {
    const response = await fetch(`/api/stock-data/?symbol=${symbol}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data); // Log data to console for debugging
    return data;
  } catch (error) {
    console.error("Error fetching stock data for symbol:", symbol, error);
    return null;
  }
}

// Function to update the canvas with stock data
function renderStockChart(canvasId, stockData) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  const stockChart = new Chart(ctx, {
    type: "line", // Line chart to show stock price movements
    data: {
      labels: stockData.dates, // Assuming 'dates' is an array of date strings
      datasets: [
        {
          label: stockData.ticker, // Assuming 'ticker' is provided in the data
          data: stockData.prices, // Assuming 'prices' is an array of stock prices
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false, // Set to true if scale should start at zero
        },
      },
    },
  });
}

// Load and render stock charts for multiple symbols
window.onload = async function () {
  const symbols = [
    "AAPL",
    "NVDA",
    "MSFT",
    "INTC",
    "GOOG",
    "AMZN",
    "TSLA",
    "META",
    "AMD",
  ];
  for (const symbol of symbols) {
    try {
      const stockData = await fetchStockData(symbol);
      if (stockData) {
        renderStockChart(`stock-chart-${symbol.toLowerCase()}`, stockData);
      }
    } catch (error) {
      console.error("Error processing stock data for symbol:", symbol, error);
    }
  }
};
