document.getElementById('btn').addEventListener('click', ()=>{
  document.getElementById('loading-icon').style.display='block'
  let url2 = document.getElementById('scanner-input').value 
  axios({
      method:'get',
      url:'http://localhost:4000/scanner',
      params: {
        url: url2
      }
  }) .then(res => {

    console.log(res.data)
    divRes = document.getElementById('result')
    if (res.data === true){
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<span class="red">This website has XSS vulnerabilities.</span>'
    }
    else if(res.data === false){
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<span class="green">This website is safe.</span>'
    }
    else{
      document.getElementById('loading-icon').style.display='none'
      divRes.innerHTML  = '<p class="error"> Sorry for the inconvenience. The scanner can\'t complete scanning due to: </p>'+
      `<p class="error">${res.data}</p>`
    }
  })
})







