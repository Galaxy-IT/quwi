const requestOptions = () => {
  let token = null
  if(process.browser) {
  token =  window.$nuxt.$cookies.get('token')
}
const requestOptions = {
  headers: {
    'Authorization': `Bearer ${token}`
  },
  method: 'GET',
  redirect: 'follow'
};
  return requestOptions
}
export default requestOptions
