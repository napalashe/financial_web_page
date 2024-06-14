from django.shortcuts import render
from django.http import HttpResponse
import requests
from django.conf import settings


# Create your views here.
def index(request):
    return render(request, 'core/index.html',)




def get_ticker_data(tickers):
    base_url = "https://api.polygon.io/v2/aggs/ticker/{ticker}/prev?adjusted=true&apiKey=" + settings.POLYGON_API_KEY
    results = {}
    for ticker in tickers:
        response = requests.get(base_url.format(ticker=ticker))
        if response.status_code == 200:
            results[ticker] = response.json()
        else:
            results[ticker] = {'error': 'Failed to fetch data'}
    return results

def home_page(request):
    tickers = ['AAPL', 'GOOG', 'MSFT','TSLA']
    ticker_data = get_ticker_data(tickers)
    return render(request, 'core/ticker.html', {'ticker_data': ticker_data})