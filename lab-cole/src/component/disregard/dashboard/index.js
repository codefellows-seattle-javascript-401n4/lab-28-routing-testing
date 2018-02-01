// import React from 'react'
// import NoteCreateForm from '../expense-form'

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       expenses: [],
//     }

//     this.addExpense = this.addExpense.bind(this)
//   }

//   addExpense(expense) {
//     this.setState(prevState => ({
//       expenses: [...prevState.expenses, expense],
//     }))
//   }

//   componentDidUpdate() {
//     console.log('__STATE__', this.state)
//   }

//   componentDidMount() {
//   }

//   render() {
//     return (
//       <div className='dashboard'>
//           <h1> Dash Component </h1>
//           <ExpenseForm onComplete={this.addExpense} />
//       </div>
//     )
//   }
// }

// export default Dashboard