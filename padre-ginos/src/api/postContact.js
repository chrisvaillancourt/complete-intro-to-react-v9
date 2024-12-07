export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  if (!response.ok) {
    // we want to throw an error here so tanstack query can catch the error
    // and set the isError prop to true
    throw new Error("Network response was not okay.");
  }
  return response.json();
}
