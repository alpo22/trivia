export const copyStringToClipboard = async (str) => {
  try {
    await navigator.clipboard.writeText(str);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
