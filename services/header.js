const headers = () =>  {
  const fetch = require("node-fetch");
  const myHeaders = new fetch.Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Client-Company", "udimi");
  myHeaders.append("Client-Device", "timetracker");
  myHeaders.append("Client-Timezone-Name", "UTC");
  return myHeaders
}

export default headers

