import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple&order=market_cap_desc&per_page=3&page=1&sparkline=false'
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch crypto data');
        setLoading(false);
        console.error('Error fetching crypto data:', err);
      }
    };

    fetchCryptoData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchCryptoData, 300000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
        <div className="space-y-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex justify-between">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-red-300 dark:border-red-700">
        <h3 className="text-lg font-medium mb-2">Crypto Tracker</h3>
        <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-medium mb-4">Crypto Tracker</h3>
      <div className="space-y-3">
        {cryptoData.map((crypto) => (
          <div key={crypto.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm font-medium">{crypto.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                ({crypto.symbol.toUpperCase()})
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">
                ${crypto.current_price.toLocaleString()}
              </span>
              <span
                className={`flex items-center text-xs ${
                  crypto.price_change_percentage_24h >= 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {crypto.price_change_percentage_24h >= 0 ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;