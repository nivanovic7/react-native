export default function isTokenExpired(token) {
  const decoded = JSON.parse(atob(token.split(".")[1]));
  return decoded.exp * 1000 < Date.now();
}

export function getMembersWithoutCurrentUser(chat, currentUserId) {
  return chat.chatMembers.filter((member) => member._id != currentUserId);
}
