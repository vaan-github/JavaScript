const insert = document.querySelector('#insert')

window.addEventListener('keydown',(e)=>{
 insert.innerHTML = `
       <div >
        <table>
  <tr>
    <th>key</th>
    <th>key-code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space": e.key}</td>
    <td>${e.code}</td>
  </tr>
       </table>
       </div>  `
},false)