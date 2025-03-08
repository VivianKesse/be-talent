import Header from "../../components/header/Header"
import styles from "./Employees.module.css"
import EmployeesTable from "../../components/employees-table/EmployeesTable"

function Employees() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <EmployeesTable />
      </div>
    </>
  )
}

export default Employees

