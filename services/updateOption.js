const updateOptions = (data) =>  {
  let token = null
  if(process.browser) {
    token =  window.$nuxt.$cookies.get('token')
  }

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formdata.append(key,value);
  }

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  return requestOptions
}

export default updateOptions
