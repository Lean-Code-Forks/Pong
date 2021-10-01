
function PONG(){
  const draw = { fps: 200; seq: `arena net score paddle ball` };
  window.onkeydown = function paddlePosition(evt) {
    lUP:  evt.keyCode === 87 && mem.paddleL.y += 1;  // currently affected by framerates
    lDOWN:evt.keyCode === 83 && mem.paddleL.y += -1; // currently affected by framerates
    rUP:  evt.keyCode === 38 && mem.paddleR.y += 1;  // currently affected by framerates
    rDOWN:evt.keyCode === 40 && mem.paddleR.y += -1; // currently affected by framerates
  }
  let mem = {
    arena  : { x:  0, y:0 , width: 400, height: 200, color: "black",   border: "3px blue solid"},
    net    : { x:  0, y:0 , width:  10, height: 200, color: "yellow",  border: "3px red dashed"},
    scoreL : { x: 20, y:80, width:  20, height:  20, color: "pink",    border: "1px grey none", cnt:0 },
    scoreR : { x: 20, y:80, width:  20, height:  20, color: "pink",    border: "1px grey none", cnt:0 },
    paddleL: { x:-180,y: 0, width:  14, height:  46, color: "white",   border: "1px green solid"},
    paddleR: { x: 180,y: 0, width:  14, height:  46, color: "white",   border: "1px yellow solid"},
    ball   : { x:   0,y: 0, radius: 5,               color: "blue",    border: "1px pink solid"}
  };
  const play = (sel) => {
      setInterval(()=>{        
        let str = "";
        Object.keys(mem).forEach((key, idx)=>{ let o = mem[key]; defaults(o, idx); uis[sel](str,o,idx); })
        document.body.innerHTML = html;
      },1000 / draw.fps);
  }
  
  const defaults = (o)=>{
//       defaults for mem
      
  }
  
  const uis = {
    html(str,o,idx) {
        str += `<div style="z: ${idx}; 
                      x: ${o.x}; y: ${o.y}; 
                      left: ${o.left}; right: ${o.right}; top: ${o.top};
                      color: ${o.color};"
             >${o.cnt}</div>`
    },
    svg(){
    
    },
    canvas(){
    
    },
    terminal(){
    
    } 
}
