import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'



// Todo => Hooks are features that allow us to use state and other react features without writting class .


// Class based Component

// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count:0}
//   }

//   incrementCount = () =>{
//     this.setState({count: this.state.count + 1})
//   }

//   render(){
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }


// Functional Component

// function MyComponent(){
//   const [count,setCount] = useState(0)

//   function increment(){
//     setCount(count+1)
//   }
//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={increment}>+</button>
//     </>
//   )
// }




// -------------------------------------------------------------------------------------------------------------------------------------


// TODO => React LifeCycle Methods :
//  A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase. 
// The Mounting Phase begins when a component is first created and inserted into the DOM. The Updating Phase occurs when a component's state or props change. And the Unmounting Phase occurs when a component is removed from the DOM.


// function App() {

//   const [ render,setRender] = useState(true)
//   useEffect(() => {
//     setTimeout(() => {
//       setRender(false)
//     }, 10000);
  
//   }, [])
  
//   return (
//     <>                
//     { render ? <MyComponent/> : <div> </div>}   
//     </>
//   )
// }

// export default App


// function MyComponent(){
//   useEffect(()=>{
//     console.error("component mounted")

//     // NOTE : We should always written a function in useeffect
//     return () =>{
//       console.log("component unmounted");
      
//     }
//   },[])

//   return(
//     <div>
//       From inside my component
//     </div>
//   )
// }



// TODO =>
  //  Customr Hooks  - is effectively a function with foll. property :
  // 1. uses another hooks internally (usestate,useffect etc...)
  // 2. starts with use   

  // examples: data fetching hooks , browser functionality related hooks , timer based hooks (useintrval, usedebounce)


import axios from 'axios'

// custome hook

// function App() {
//   const {user,loading} = useUsers()
//   if(loading){
//     return <div>loading ....</div>
//   }
//   return (
//     <>      
//     {user.map((user) => <Data  user={user} key={user.id} /> )}          
//     </>
//   )
// }
// export default App

// function useUsers(){
//   const [user,setUser] = useState([])
//   const [loading,setLoading] = useState(true)

//   useEffect(()=>{
//     setTimeout(() => {
//       axios.get("https://dummyjson.com/users")
//       .then(res =>{
//         // console.log(res.data);
//         setUser(res.data.users)
//         setLoading(false)
//       })
//     }, 1000);
//   },[])

//   return {user,loading}
// }

// function Data ({user}){
//   return (
//     <div>
//      { user.firstName}   { user.lastName}
//      <br />
//      {user.email}
//     </div>
//   )

// }


// ANOTHER HOOKS PRACTICE

// ISONLINE()

// function App() {
//   const isOnline = useIsOnline()
//   if(isOnline){
//     return "You are online yaay !"
//   }
//    else{
//     return "You are offline , Plese connect to internet "
//    }
// }

// export default App


// function useIsOnline(){
//   const [isOnline,setIsOnline] = useState(window.navigator.onLine)

//   useEffect(()=>{
//     window.addEventListener("online", ()=>{
//       setIsOnline(true)
//     })

//     window.removeEventListener("offline", ()=>{
//       setIsOnline(false)
//     })
//   },[])

//   return isOnline
// }



// MOUSEPOINTER()

// function App() {
//   const mousepointer = useMousePointer()

//   return (
//     <h1>Your mouse position is : X: {mousepointer.x}  Y: {mousepointer.y}</h1>
//   )
// }
// export default App

// function useMousePointer(){
//   const [position,setPosition] = useState({x:0,y:0})

//   const handleMove = (e) =>{
//     setPosition({ x:e.clientX, y:e.clientY })
//   }
//   useEffect(()=>{
//     window.addEventListener("mousemove",handleMove)
//     return () =>{
//       window.removeEventListener("mousemove",handleMove)
//     }
//   },[])

//   return position
// }


// USEDIMENSIONS

// function App() {
//   const {height,width} = useDimensions()

//   return (
//     <h1>The dimension of the screen is : Height: {height}  Width: {width}</h1>
//   )
// }
// export default App

// function useDimensions(){
//   const [width, setWidth] = useState(window.innerWidth)
//   const [height, setHeight] = useState(window.innerHeight)

//   const handleResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight)
//   };

//   useEffect(()=>{
//     window.addEventListener('resize', handleResize);
//     return ()=>{
//       window.removeEventListener('resize', handleResize);
//     }
//   },[])

//   return {width,height}
// }



// Performance / Timer Based : useinterval 


function App(){
  const [count,setCount] = useState(0)
  useInterval(()=>{
    setCount( count => count + 1)
  },1000)
  return (
    <>
    Count: {count}
    </>
  )
}

export default App


function useInterval(count){

}