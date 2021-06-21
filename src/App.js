import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import FormBudget from './components/FormBudget'
import {Row, Col} from 'reactstrap' 
import List from './components/List'
import ControlBudget from './components/ControlBudget'
import FontAwesomeIcon from "./components/FontAwesomeIcon";

function App() {

  let initExpenses = JSON.parse(localStorage.getItem("init"));
  if(!initExpenses){
    initExpenses = []
  }

  let initResiduary = JSON.parse(localStorage.getItem("initResiduary"));
  if(!initResiduary){
    initResiduary = 0
  }

  let initBudget = JSON.parse(localStorage.getItem("initBudget"));
  if(!initBudget){
    initBudget = 0
  }

  const [currentBudget, setCurrentBudget] = useState(initBudget)
  const [residuary, setResiduary] = useState(initResiduary)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState(initExpenses);

  // const [expense, setExpense] = useState({})

  // useEffect(() => {
  //   if(Object.keys(expense).length !== 0) {
      
  //     const data = [expense, ...expense]
      
  //     localStorage.setItem("init", JSON.stringify(data))
      
  //     setExpenses((aux=>([...aux, expense])));

  //     const residuaryBudget = residuary - expense.amount

  //     setResiduary(residuaryBudget)

  //   }
  //   //eslint-disable-next-line   
  // }, [expense])



  useEffect(() => {
      localStorage.setItem("init", JSON.stringify(expenses))
      localStorage.setItem("initBudget", JSON.stringify(currentBudget))
      localStorage.setItem("initResiduary", JSON.stringify(residuary))
      if(expenses.length >= 1){
        setShowQuestion(false)
      }
  }, [expenses, currentBudget, residuary])


  const addExpense =(a)=>{
    setExpenses([...expenses, a]);
    const residuaryBudget = residuary - a.amount
    setResiduary(residuaryBudget)
  }

  const deleteExpense = (id, cost) =>{
    const newExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(newExpenses)
    
    const currentResiduary = residuary + cost
    setResiduary(currentResiduary)
  }

  const resetForm = () =>{
    localStorage.setItem("init", JSON.stringify([]))
    localStorage.setItem("initBudget", JSON.stringify(0))
    localStorage.setItem("initResiduary", JSON.stringify(0))
    setExpenses([])
    setShowQuestion(true)
  }

  return (
    <div className="container">
      <header>
          <h1 className="mb-3">Gasto Semanal</h1>
          {showQuestion ? null
          :(
           <div className="w-100 d-flex justify-content-center mb-3">
              <button className="remove-border p-0" onClick={resetForm}>
                <FontAwesomeIcon color="white" className="remove-border ml-1 mr-1" size="3x" icon="arrow-circle-left"/>
              </button>
            </div>
          )}
  
          <div className="contenido-principal contenido">
            {showQuestion
            ? (
              <Form 
                setCurrentBudget = {setCurrentBudget} 
                setResiduary={setResiduary} 
                setShowQuestion={setShowQuestion}
              />
            ) : (
              <div className="w-100"> 
                <Row>
                  <Col xs="12" md="6" sm="4">
                    <FormBudget addExpense={addExpense} />
                  </Col>
                  <Col xs="12" md="6" sm="4">
                    <List expenses = {expenses} deleteExpense={deleteExpense}/>
                    <ControlBudget currentBudget={currentBudget} residuary={residuary}/>
                  </Col>
                </Row>
              </div>
            )
            }
          </div>
      </header>  
    </div>
  );
}

export default App;
