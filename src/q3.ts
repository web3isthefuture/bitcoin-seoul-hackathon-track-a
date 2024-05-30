import axios from "axios";

// Async function to retrieve the number of transactions in a block by its height using BlockCypher API
const fetchTransactionCountByHeight = async (height: number): Promise<number> => {
  const endpoint = `https://api.blockcypher.com/v1/btc/test3/blocks/${height}`;

  try {
    const { data } = await axios.get(endpoint);
    return data.n_tx;
  } catch (err) {
    console.error("Error fetching block data:", err);
    throw err;
  }
};

// Specify the block height you need to query
const targetBlockHeight = 2817664; // Example block height

fetchTransactionCountByHeight(targetBlockHeight)
  .then(txCount => {
    console.log(`Number of new outputs created by block at height ${targetBlockHeight}: ${txCount}`);
  })
  .catch(err => {
    console.error("Error fetching transaction count:", err);
  });
