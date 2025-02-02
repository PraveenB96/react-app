import Student from "./Students"
import Header from "./Header"
import UserGreetings from "./UserGreeting"
import List from "./List"
import Button from "./Button"
import ProfilePicture from "./ProfilePicture"
import MyComponent from "./MyComponent"
import Counter from "./assets/Counter"

function App() {

  let fruits = [{id:1, name: 'Apple', calories: 95},
    {id:2, name:'Cherry', calories: 50},
    {id:3, name:'Banana', calories: 105},
    {id:4, name:'Date', calories: 20},
    {id:5, name:'Elderberry', calories: 17}];

  const vegetables = [{id:6, name: 'Potatoes', calories: 110},
    {id:7, name:'Celery', calories: 50},
    {id:8, name:'Carrots', calories: 105},
    {id:9, name:'Corn', calories: 20},
    {id:10, name:'broccoli', calories: 17}];

  //fruits = [];

  return (
    <>
      <Counter />
      {/* {fruits.length>0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length>0 && <List items={vegetables} category="Vegetables"/>}
      <Header />
      <UserGreetings isLoggedIn={true} userName="Praveen Baruri"/>
      <Student name="Praveen Baruri"
               age={28}
               isStudent={true}/>
      <Student name="Durga Bhavani Baruri"
               age={26}
               isStudent={true}/>
      <Student name="Sobha Rani Baruri"
               age={52}
               isStudent={false}/>
      <Student name="Radha Krishna Aripirala"
               age={63}
               isStudent={false}/> */}
    </>
  )
}

export default App