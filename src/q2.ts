import * as bitcoinMessage from "bitcoinjs-message";

// Variables to hold the address, message, and signature
const btcAddress = "1E9YwDtYf9R29ekNAfbV7MvB4LNv7v3fGa";
const btcMessage = "1E9YwDtYf9R29ekNAfbV7MvB4LNv7v3fGa";
const btcSignature = "HCsBcgB+Wcm8kOGMH8IpNeg0H4gjCrlqwDf/GlSXphZGBYxm0QkKEPhh9DTJRp2IDNUhVr0FhP9qCqo2W0recNM=";

// Function to verify the Bitcoin message signature
const validateSignature = (address: string, message: string, signature: string): boolean => {
  try {
    return bitcoinMessage.verify(message, address, signature);
  } catch (err) {
    console.error("Failed to verify message:", err);
    return false;
  }
};

// Checking if the signature is valid
const isSignatureValid = validateSignature(btcAddress, btcMessage, btcSignature);

console.log(`Is the signature valid? ${isSignatureValid}`);
