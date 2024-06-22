// // Returns initials from string
// export const getInitials = string => string.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '')



// Util Imports
export const getInitials = string => {
  if (!string) return ''; // Tambahkan pemeriksaan ini

  return string.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), '');
}
