
import Link from 'next/link';
import styles from '../styles/results.module.css'; // Import the CSS module
import resultsData from './results.json';

function Results() {
  const { results } = resultsData;

  return (
    <div className={styles.results_container}>
      <h1 className={styles.results_heading}>Results</h1>
      <ul className={styles.results_list}>
        {results.map((result, index) => (
          <li key={index} className={styles.result_item}>
            <h2>
              <Link href={`/results/${result.studentId}`}>
                {result.studentName}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;

  