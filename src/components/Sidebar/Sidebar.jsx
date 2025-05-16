import style from './sidebar.module.scss'
import { MENU } from './data'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const Sidebar = () => {
  const [activeId, setActiveId] = useState(0)

  const removeLinkMenu = (id) => {
    if (activeId == id) return setActiveId(0)
    setActiveId(id)
  }
  return (
    <div className={style['sidebar']}>
      <div className={style['sidebar--logo']}>
        <h1>Индиго</h1>
      </div>
      <nav className={style['sidebar--nav']}>
        <ul>
          {MENU.map((link) => (
            <li key={link.id}>
              <Link
                style={activeId == link.id ? { borderBottom: '2px solid var(--accent-color)' } : {}}
                onClick={() => removeLinkMenu(link.id)}
              >
                <div className={style['link--content']}>
                  <link.icon />
                  {link.title}
                </div>

                {activeId == link.id ? <ChevronUp /> : <ChevronDown />}
              </Link>
              <div
                className={
                  activeId == link.id
                    ? style['links--children'] + ` ` + style['active']
                    : style['links--children']
                }
                style={
                  activeId == link.id
                    ? { height: `${link.links.length * 30}` + 'px' }
                    : { height: 0 }
                }
              >
                {link.links.map((linkChild) => (
                  <Link key={linkChild.id}>{linkChild.title}</Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
