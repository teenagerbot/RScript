class ScreenTaker{downloadElement(e,n=Date.now()){let r=e.toDataURL("image/png;base64"),a=document.createElement("a");a.style.display="none",a.download=n,a.href=r,document.body.appendChild(a),setTimeout(()=>{a.click()},1e3)}takeScreenFromElementText(e){html2canvas(document.querySelector(e)).then(e=>{let n=new ScreenTaker;n.downloadElement(e)})}takeScreenFromElement(e){html2canvas(e).then(e=>{let n=new ScreenTaker;n.downloadElement(e)})}}let AndroidScreenTaker=new ScreenTaker;export{AndroidScreenTaker};