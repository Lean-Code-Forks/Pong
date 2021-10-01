
function PONG(){   
  const draw = { fps: 200; seq: `arena net score paddle ball`] };
  let mem = {
    arena  : { x:  0, y:0 , left: 200, right: 200, top: 100, bottom: 100, color: "black" };
    net    : { x:  0, y:0 , left:   5, right:   5, top: 100, bottom: 100, color: "yellow"};
    scoreL : { x: 20, y:80, left:  10, right:  10, top:  10, bottom:  10, color: "pink", cnt:0 };
    scoreR : { x: 20, y:80, left:  10, right:  10, top:  10, bottom:  10, color: "pink", cnt:0 };
    paddleL: { x:-180,y: 0, left:   7, right:   7, top:  23, bottom:  23, color: "white" };
    paddleR: { x: 180,y: 0, left:   7, right:   7, top:  23, bottom:  23, color: "white" };
    ball   : { x:   0,y: 0, radius: 5,                       bottom:  23, color: "blue"  };
  }
  const play = (sel) => {
      setInterval(()=>{        
        let str = "";
        mem.forEach((o, idx)=>{ defaults(o, idx); uis[sel](str,o,idx); })
        document.body.innerHTML = html;
      },1000 / draw.fps);
  }
  
  const defaults = (o)=>{
  
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
