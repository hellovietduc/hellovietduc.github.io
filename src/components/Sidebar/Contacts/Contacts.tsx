import React from 'react'
import { getContactHref, getIcon } from '../../../utils'
import Icon from '../../Icon'
import type { Contacts as ContactsProps, Styles } from '../../../types'
import styles from './Contacts.module.scss'

interface Props {
  contacts: ContactsProps
  styles?: Styles
}

const Contacts: React.FC<Props> = ({ contacts, styles: customStyles }) => (
  <div className={styles['contacts']} style={customStyles || {}}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name) =>
        !contacts[name] ? null : (
          <li className={styles['contacts__list-item']} key={name}>
            <a
              className={styles['contacts__list-item-link']}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name={name} icon={getIcon(name)} />
            </a>
          </li>
        ),
      )}
    </ul>
  </div>
)

export default Contacts
