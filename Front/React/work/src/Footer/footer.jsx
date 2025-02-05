import { useState, useEffect } from "react";
import React from "react";
import { Table, Container } from "react-bootstrap";
import testMount from "../testmount/testMount";

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
//     return(response.json());
// }).then(data=>{
//     console.log(data);
// })

// fetch('https://randomuser.me/api/')
// .then(response=>{
//     return response.json()
// }).then(data=>{
//     console.log(data);
// })
// let newPost = {
//   userID: 21,
//   body: "fetch in js",
//   title: "js",
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify(newPost),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'DELETE'
// }).then(response=>{
//     return response.json()
// }).then(data=>console.log(data)
// )

// const [post, setData] = useState([]);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setData(data);
//     });
// }, []);

// const [count , setCount ]= useState(0)
// const [users , setUsers]= useState([
//   {id:1, name:'mohammad', age:22},
//   {id:2, name:'ali', age:122},
//   {id:3, name:'amin', age:52},
//   {id:4, name:'amir', age:32}
// ])
// const plusCount=()=>{
//   setCount(pervState=>{
//     return pervState +1
//   })
// }

// const minusCount = ()=>{
//   setCount(pervState=>{
//     return pervState-1
//   })
// }
// const removeUser=(userID)=>{
//   setUsers(pervState=>{
//     let newUsers=pervState.filter(user=>{
//       return user.id !== userID
//     })
//     return newUsers
//   })

// }

// const [count, setCount] = useState(0);
// // useEffect(() => {
// //   console.log("component mount");
// // });

// useEffect(()=>{
//   console.log('component update');

// }, [count])
// const minusCount = () => {
//   let newCount = setCount((prevCount) => {
//     return prevCount - 1;
//   });
//   return newCount
// };
// const plusCount = () => {
//   let newCount = setCount((prevCount) => {
//     return prevCount + 1;
//   });
//   return newCount
// };
export default function Footer() {
  const [users, setUsers] = useState([
    { id: 1, name: "ali" },
    { id: 2, name: "MMD" },
    { id: 3, name: "amin" },
    { id: 4, name: "Amir" },
  ]);

  const removeHandler = (userID) => {
    setUsers((pervUsers) => {
      let newUsers = pervUsers.filter(user => user.id !== userID);
    })
  };

  return (
    <Container>
      <h1>FOOTER</h1>
    </Container>
  );
}
