import React from 'react';

class App extends React.Component{
  state={
    second:0,
    minute:0,
    hour:0,
    btnDisabled:false,
    interval:'',
    intervalsStorage:[
      '1:09;98','2:13:89',
    ]
  }
startClicked=()=>{
  this.setState({
    btnDisabled:true,
  })
 let timer =  setInterval(() => {
    const {second,minute,hour,btnDisabled}=this.state;
if(second===59){
  if(minute===59){
    this.setState({
      second:0,
      minute:0,
      hour:hour+1,
    })
  }else{
    this.setState({
      second:0,
      minute:minute+1,
    })
  }
}else{
   this.setState({
     second:second+1
   }) 
}
},100);
this.setState({
  interval:timer
})
}
stopClicked=()=>{
clearInterval(this.state.interval)
this.setState({
  btnDisabled:false,
})
}
clearClicked=()=>{
this.stopClicked();
  this.setState({
    second:0,
minute:0,
hour:0,
intervalsStorage:[]
  })
  

}
intervalClicked=()=>{
  const{intervalsStorage,hour,minute,second}=this.state;
  intervalsStorage.push(`${hour}:${second}:${minute}`)
  this.setState(
    {intervalsStorage})
    
}
render(){
  const{second,minute,hour, btnDisabled,intervalsStorage}=this.state
  return(
    <div    >
      <div className="timer-container  text-center ">
      <h1  className='mb-4' >  <span  className='span' > online </span>  <b>stopwatch</b></h1>
      <div className="timer-col">
        <p className='timer-hours'  >  <b>{hour}</b> </p>
        <p className='timer-labels'  >hours</p>


      </div>
      <div className="timer-col">
      <p className='timer-hours'  >  <b>{minute}</b> </p>
       <p  className='timer-labels' >minutes</p>

      </div>
   
      <div className="timer-col">
      <p className='timer-hours'  >  <b>{second}</b> </p>
       <p  className='timer-labels' >seconds</p>
     
      </div>
    
      </div>
     <div className="timer-container  text-center">
      <div className="timer-btn">
     <button disabled={this.state.btnDisabled}   className='btn btn-success' onClick={this.startClicked}  >start</button>
      </div>
      <div className="timer-btn">
     <button disabled={!btnDisabled}    onClick={this.intervalClicked} className='btn btn-light' >interval</button>
      </div>
      <div className="timer-btn">
     <button className='btn btn-danger'  onClick={this.stopClicked} >delete</button>
      </div>
      <div className="timer-btn">
     <button onClick={this.clearClicked}  className='btn btn-warning' >clear</button>
      </div>
     </div>
     <div className="timer-container-intervals text-center">
{
  intervalsStorage.map((item,index)=> <p>{index+1}.=&gt;{item})</p>
  )
}
     </div>
    </div>
   
    
  )
}
};

export default App;
