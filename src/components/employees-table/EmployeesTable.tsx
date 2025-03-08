import { useEffect, useState } from "react"
import styles from "./EmployeesTable.module.css"
import { Employee } from "../../types/employee"
import FilterInput from "../filterInput/FilterInput";

const API_URL = import.meta.env.VITE_API_URL;

const formatPhoneNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 13) {
    return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
  } else if (digits.length === 12) {
    return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4, 8)}-${digits.slice(8)}`;
  } else {
    return phone;
  }
};

export default function EmployeesTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.log("Erro ao buscar funcionários: ", error));
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  }

  const filteredEmployees = employees.filter((employee) =>
    ["name", "job", "phone"].some((key) => {
      const value = employee[key as keyof Employee];
      return value.toString().toLowerCase().includes(search.toLowerCase())
    }
    )
  )

  return (
    <>
      <div className={styles.employeesInput}>
        <h3 className={styles.titleEmployees}>Funcionários</h3>
        <FilterInput searchText={search} onSearchChange={setSearch} />
      </div>

      <div className={styles.employeeList}>
        <div className={styles.headerList}>
          <div>
            <span>Foto</span>
            <span>Nome</span>
          </div>
          <div className={styles.pointHeader}></div>
        </div>

        {filteredEmployees.map((employee, index) => (
          <div key={employee.id} className={styles.employeeCard}>
            <div className={styles.employeeHeader} onClick={() => toggleExpand(index)}>
              <div className={styles.employeeHeaderInfo}>
                {/* <div className={`${styles.employeeHeaderInfo} ${expanded === index ? styles.expanded : ''}`}> */}
                <td>
                  <img
                    className={styles.profilePhoto}
                    alt={"Foto do funcionário " + employee.name}
                    src={employee.image}
                  />
                </td>
                <td>{employee.name}</td>
              </div>
              <span className={styles.toggleIcon}>
                {expanded === index ? (
                  <img
                    src="/src/assets/close-icon.svg"
                    alt="ícone para fechar detalhes do funcionário"
                  />
                ) : (
                  <img
                    src="/src/assets/open-icon.svg"
                    alt="ícone para abrir detalhes do funcionário"
                  />
                )}
              </span>
            </div>
            {expanded === index && (
              <div className={styles.employeeInfoOpen}>
                <div>
                  <span className={styles.titleInfo}>Cargo</span>
                  <span>{employee.job}</span>
                </div>
                <div>
                  <span className={styles.titleInfo}>Data de admissão</span>
                  <span>{new Date(employee.admission_date).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className={styles.titleInfo}>Telefone</span>
                  <span>{formatPhoneNumber(employee.phone)}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.employeeTable}>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Data de Admissão</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <img
                    className={styles.profilePhoto}
                    alt={"Foto do funcionário " + employee.name}
                    src={employee.image}
                  />
                </td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{new Date(employee.admission_date).toLocaleDateString()}</td>
                <td>{formatPhoneNumber(employee.phone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}