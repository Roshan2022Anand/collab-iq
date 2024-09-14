import React from 'react'
import styles from "@/app/mainPg/(home)/mainPg.module.css"

const RecentActivity = () => {
  return (
      <section className={styles['activity-section']}>
          <p>Recent Acitivity</p>
          <ul>
              <li>Acitivity 1</li>
              <li>Acitivity 2</li>
              <li>Acitivity 3</li>
          </ul>
      </section>
  )
}

export default RecentActivity