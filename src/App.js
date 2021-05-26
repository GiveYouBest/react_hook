//useState
import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Link,exact} from 'react-router-dom'

function Index(){
  useEffect(()=>{ //代表 componentDidMount componentDidUpdate 生命周期
    console.log(` useEffect Index页面`)
    return ()=>{ //代表componetnWillUnmont
      console.log(`离开Index页面`) 
    }
  },[])
  return <h2>Souljs.cn</h2>
}

function List(){
  useEffect(()=>{ //代表 componentDidMount componentDidUpdate 生命周期
    console.log(` useEffect List页面`)
    return ()=>{ //代表componetnWillUnmont
      console.log(`离开List页面`) 
    }
  },[])
  return <h2>List Page</h2>
}

function Example(){
  const [count,setCount] = useState(0) //数组解构
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  // console.log(_useState)
  useEffect(()=>{ //代表 componentDidMount componentDidUpdate 生命周期
    console.log(` useEffect You Click ${count} times`)
    return ()=>{
      console.log('====')
    }
  },[count])
  const [age,setAge] = useState(25)
  const [sex,setSex] = useState('男')
  const [work,setWork] = useState('前端程序员')
  return (
    <div>
      <p>年龄:{age}岁</p>
      <p>性别:{sex} </p>
      <p>职业:{work} </p>
      <p>You clicked{count} times</p>
      <button onClick={()=>{setCount(count + 1)}}>Click Me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/"  component={List} />
      </Router>
    </div>
  )
}

export default Example;
