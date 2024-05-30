import axios from "axios";

// Async function to retrieve block hash based on block height via BlockCypher API
const fetchBlockHash = async (height: number): Promise<string> => {
  const endpoint = `https://api.blockcypher.com/v1/btc/test3/blocks/${height}`;
  
  try {
    const { data } = await axios.get(endpoint);
    return data.hash;
  } catch (err) {
    console.error("Failed to fetch block hash:", err);
    throw err;
  }
};

// Specify the block height you need to query
const targetBlockHeight = 2817663; // Example block height

fetchBlockHash(targetBlockHeight)
  .then(hash => console.log(`Block hash for height ${targetBlockHeight}: ${hash}`))
  .catch(err => console.error("An error occurred:", err));
