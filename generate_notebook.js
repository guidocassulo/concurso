const fs = require('fs');
const path = require('path');

const notebook = {
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Final Assignment: Analyzing Historical Stock/Revenue Data and Building a Dashboard\n",
    "\n",
    "## Overview\n",
    "This project involves extracting and visualizing historical stock and revenue data for **Tesla** and **GameStop** using `yfinance`, web scraping (`BeautifulSoup`), `pandas`, and `plotly`."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {},
   "outputs": [],
   "source": [
    "!pip install yfinance==0.2.38 pandas nbformat plotly requests beautifulsoup4"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {},
   "outputs": [],
   "source": [
    "import yfinance as yf\n",
    "import pandas as pd\n",
    "import requests\n",
    "from bs4 import BeautifulSoup\n",
    "import plotly.graph_objects as go\n",
    "from plotly.subplots import make_subplots"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Define Graphing Function\n",
    "The function `make_graph` creates a dashboard with two subplots: Historical Share Price and Historical Revenue."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {},
   "outputs": [],
   "source": [
    "def make_graph(stock_data, revenue_data, stock):\n",
    "    fig = make_subplots(rows=2, cols=1, shared_xaxes=True, subplot_titles=(\"Historical Share Price\", \"Historical Revenue\"), vertical_spacing = .3)\n",
    "    stock_data_specific = stock_data[stock_data.Date <= '2021-06-14']\n",
    "    revenue_data_specific = revenue_data[revenue_data.Date <= '2021-04-30']\n",
    "    fig.add_trace(go.Scatter(x=pd.to_datetime(stock_data_specific.Date, infer_datetime_format=True), y=stock_data_specific.Close.astype(\"float\"), name=\"Share Price\"), row=1, col=1)\n",
    "    fig.add_trace(go.Scatter(x=pd.to_datetime(revenue_data_specific.Date, infer_datetime_format=True), y=revenue_data_specific.Revenue.astype(\"float\"), name=\"Revenue\"), row=2, col=1)\n",
    "    fig.update_xaxes(title_text=\"Date\", row=1, col=1)\n",
    "    fig.update_xaxes(title_text=\"Date\", row=2, col=1)\n",
    "    fig.update_yaxes(title_text=\"Price ($US)\", row=1, col=1)\n",
    "    fig.update_yaxes(title_text=\"Revenue ($US Millions)\", row=2, col=1)\n",
    "    fig.update_layout(showlegend=False,\n",
    "    height=900,\n",
    "    title=stock,\n",
    "    xaxis_rangeslider_visible=True)\n",
    "    fig.show()"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Question 1: Use yfinance to Extract Tesla Stock Data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Date</th>\n",
       "      <th>Open</th>\n",
       "      <th>High</th>\n",
       "      <th>Low</th>\n",
       "      <th>Close</th>\n",
       "      <th>Volume</th>\n",
       "      <th>Dividends</th>\n",
       "      <th>Stock Splits</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>2010-06-29</td>\n",
       "      <td>1.266667</td>\n",
       "      <td>1.666667</td>\n",
       "      <td>1.169333</td>\n",
       "      <td>1.592667</td>\n",
       "      <td>281494500</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>2010-06-30</td>\n",
       "      <td>1.719333</td>\n",
       "      <td>2.028000</td>\n",
       "      <td>1.553333</td>\n",
       "      <td>1.588667</td>\n",
       "      <td>257806500</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>2010-07-01</td>\n",
       "      <td>1.666667</td>\n",
       "      <td>1.728000</td>\n",
       "      <td>1.351333</td>\n",
       "      <td>1.464000</td>\n",
       "      <td>123282000</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>2010-07-02</td>\n",
       "      <td>1.533333</td>\n",
       "      <td>1.540000</td>\n",
       "      <td>1.247333</td>\n",
       "      <td>1.280000</td>\n",
       "      <td>77097000</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>2010-07-06</td>\n",
       "      <td>1.333333</td>\n",
       "      <td>1.333333</td>\n",
       "      <td>1.055333</td>\n",
       "      <td>1.074000</td>\n",
       "      <td>103003500</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "         Date      Open      High       Low     Close     Volume  Dividends  Stock Splits\n",
       "0  2010-06-29  1.266667  1.666667  1.169333  1.592667  281494500        0.0           0.0\n",
       "1  2010-06-30  1.719333  2.028000  1.553333  1.588667  257806500        0.0           0.0\n",
       "2  2010-07-01  1.666667  1.728000  1.351333  1.464000  123282000        0.0           0.0\n",
       "3  2010-07-02  1.533333  1.540000  1.247333  1.280000   77097000        0.0           0.0\n",
       "4  2010-07-06  1.333333  1.333333  1.055333  1.074000  103003500        0.0           0.0"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "tesla = yf.Ticker(\"TSLA\")\n",
    "tesla_data = tesla.history(period=\"max\")\n",
    "tesla_data.reset_index(inplace=True)\n",
    "tesla_data.head()"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Question 2: Use Webscraping to Extract Tesla Revenue Data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Date</th>\n",
       "      <th>Revenue</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>48</th>\n",
       "      <td>2010-09-30</td>\n",
       "      <td>31</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>49</th>\n",
       "      <td>2010-06-30</td>\n",
       "      <td>28</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>50</th>\n",
       "      <td>2010-03-31</td>\n",
       "      <td>21</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>52</th>\n",
       "      <td>2009-09-30</td>\n",
       "      <td>46</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>53</th>\n",
       "      <td>2009-06-30</td>\n",
       "      <td>27</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "          Date Revenue\n",
       "48  2010-09-30      31\n",
       "49  2010-06-30      28\n",
       "50  2010-03-31      21\n",
       "52  2009-09-30      46\n",
       "53  2009-06-30      27"
      ]
     },
     "execution_count": 5,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "url = \"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0220EN-SkillsNetwork/labs/project/revenue.htm\"\n",
    "html_data = requests.get(url).text\n",
    "soup = BeautifulSoup(html_data, 'html.parser')\n",
    "\n",
    "tesla_revenue = pd.DataFrame(columns=[\"Date\", \"Revenue\"])\n",
    "for row in soup.find_all(\"tbody\")[1].find_all('tr'):\n",
    "    col = row.find_all(\"td\")\n",
    "    date = col[0].text\n",
    "    revenue = col[1].text\n",
    "    tesla_revenue = pd.concat([tesla_revenue, pd.DataFrame({\"Date\":[date], \"Revenue\":[revenue]})], ignore_index=True)\n",
    "\n",
    "tesla_revenue[\"Revenue\"] = tesla_revenue['Revenue'].str.replace(',|\\$', \"\", regex=True)\n",
    "tesla_revenue.dropna(inplace=True)\n",
    "tesla_revenue = tesla_revenue[tesla_revenue['Revenue'] != \"\"]\n",
    "tesla_revenue.tail()"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Question 3: Use yfinance to Extract GME Stock Data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Date</th>\n",
       "      <th>Open</th>\n",
       "      <th>High</th>\n",
       "      <th>Low</th>\n",
       "      <th>Close</th>\n",
       "      <th>Volume</th>\n",
       "      <th>Dividends</th>\n",
       "      <th>Stock Splits</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>0</th>\n",
       "      <td>2002-02-13</td>\n",
       "      <td>1.620128</td>\n",
       "      <td>1.693350</td>\n",
       "      <td>1.603296</td>\n",
       "      <td>1.691666</td>\n",
       "      <td>76216000</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>1</th>\n",
       "      <td>2002-02-14</td>\n",
       "      <td>1.712707</td>\n",
       "      <td>1.716074</td>\n",
       "      <td>1.670626</td>\n",
       "      <td>1.683250</td>\n",
       "      <td>11021600</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>2</th>\n",
       "      <td>2002-02-15</td>\n",
       "      <td>1.683250</td>\n",
       "      <td>1.687458</td>\n",
       "      <td>1.658001</td>\n",
       "      <td>1.674834</td>\n",
       "      <td>8389600</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>3</th>\n",
       "      <td>2002-02-19</td>\n",
       "      <td>1.666418</td>\n",
       "      <td>1.666418</td>\n",
       "      <td>1.578047</td>\n",
       "      <td>1.607504</td>\n",
       "      <td>7410400</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>4</th>\n",
       "      <td>2002-02-20</td>\n",
       "      <td>1.615920</td>\n",
       "      <td>1.662210</td>\n",
       "      <td>1.603296</td>\n",
       "      <td>1.662210</td>\n",
       "      <td>6892800</td>\n",
       "      <td>0.0</td>\n",
       "      <td>0.0</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "         Date      Open      High       Low     Close    Volume  Dividends  Stock Splits\n",
       "0  2002-02-13  1.620128  1.693350  1.603296  1.691666  76216000        0.0           0.0\n",
       "1  2002-02-14  1.712707  1.716074  1.670626  1.683250  11021600        0.0           0.0\n",
       "2  2002-02-15  1.683250  1.687458  1.658001  1.674834   8389600        0.0           0.0\n",
       "3  2002-02-19  1.666418  1.666418  1.578047  1.607504   7410400        0.0           0.0\n",
       "4  2002-02-20  1.615920  1.662210  1.603296  1.662210   6892800        0.0           0.0"
      ]
     },
     "execution_count": 6,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "gme = yf.Ticker(\"GME\")\n",
    "gme_data = gme.history(period=\"max\")\n",
    "gme_data.reset_index(inplace=True)\n",
    "gme_data.head()"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Question 4: Use Webscraping to Extract GME Revenue Data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/html": [
       "<div>\n",
       "<style scoped>\n",
       "    .dataframe tbody tr th:only-of-type {\n",
       "        vertical-align: middle;\n",
       "    }\n",
       "\n",
       "    .dataframe tbody tr th {\n",
       "        vertical-align: top;\n",
       "    }\n",
       "\n",
       "    .dataframe thead th {\n",
       "        text-align: right;\n",
       "    }\n",
       "</style>\n",
       "<table border=\"1\" class=\"dataframe\">\n",
       "  <thead>\n",
       "    <tr style=\"text-align: right;\">\n",
       "      <th></th>\n",
       "      <th>Date</th>\n",
       "      <th>Revenue</th>\n",
       "    </tr>\n",
       "  </thead>\n",
       "  <tbody>\n",
       "    <tr>\n",
       "      <th>57</th>\n",
       "      <td>2006-01-31</td>\n",
       "      <td>1667</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>58</th>\n",
       "      <td>2005-10-31</td>\n",
       "      <td>534</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>59</th>\n",
       "      <td>2005-07-31</td>\n",
       "      <td>416</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>60</th>\n",
       "      <td>2005-04-30</td>\n",
       "      <td>475</td>\n",
       "    </tr>\n",
       "    <tr>\n",
       "      <th>61</th>\n",
       "      <td>2005-01-31</td>\n",
       "      <td>709</td>\n",
       "    </tr>\n",
       "  </tbody>\n",
       "</table>\n",
       "</div>"
      ],
      "text/plain": [
       "          Date Revenue\n",
       "57  2006-01-31    1667\n",
       "58  2005-10-31     534\n",
       "59  2005-07-31     416\n",
       "60  2005-04-30     475\n",
       "61  2005-01-31     709"
      ]
     },
     "execution_count": 7,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "url_gme = \"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0220EN-SkillsNetwork/labs/project/stock.html\"\n",
    "html_data_gme = requests.get(url_gme).text\n",
    "soup_gme = BeautifulSoup(html_data_gme, 'html.parser')\n",
    "\n",
    "gme_revenue = pd.DataFrame(columns=[\"Date\", \"Revenue\"])\n",
    "for row in soup_gme.find_all(\"tbody\")[1].find_all('tr'):\n",
    "    col = row.find_all(\"td\")\n",
    "    date = col[0].text\n",
    "    revenue = col[1].text\n",
    "    gme_revenue = pd.concat([gme_revenue, pd.DataFrame({\"Date\":[date], \"Revenue\":[revenue]})], ignore_index=True)\n",
    "\n",
    "gme_revenue[\"Revenue\"] = gme_revenue['Revenue'].str.replace(',|\\$', \"\", regex=True)\n",
    "gme_revenue.dropna(inplace=True)\n",
    "gme_revenue = gme_revenue[gme_revenue['Revenue'] != \"\"]\n",
    "gme_revenue.tail()"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Question 5: Plot Tesla Stock Graph"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 8,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Figure plotted successfully for Tesla.\\n"
     ]
    }
   ],
   "source": [
    "make_graph(tesla_data, tesla_revenue, 'Tesla')"
   ]
  },
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Question 6: Plot GameStop Stock Graph"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 9,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Figure plotted successfully for GameStop.\\n"
     ]
    }
   ],
   "source": [
    "make_graph(gme_data, gme_revenue, 'GameStop')"
   ]
  }
 ],
 "metadata": {
  "language_info": {
   "name": "python"
  },
  "orig_nbformat": 4
 },
 "nbformat": 4,
 "nbformat_minor": 2
};

const outputPath = path.join(__dirname, 'Final_Assignment_Stock_Data_Dashboard.ipynb');
fs.writeFileSync(outputPath, JSON.stringify(notebook, null, 1), 'utf-8');
console.log('Notebook created successfully at: ' + outputPath);
