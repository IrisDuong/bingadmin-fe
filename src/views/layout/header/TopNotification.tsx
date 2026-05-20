import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'

function TopNotification() {
  const actions = [
    {
      key: 'notification',
      icon: <IoMdNotificationsOutline />,
      label: 'Thông báo',
    },
    {
      key: 'mail',
      icon: <IoMailOutline />,
      label: 'Tin nhắn',
    },
  ]

  return (
    <div id="top-notification">
      <div>
        {actions.map((action) => (
          <button key={action.key} type="button" aria-label={action.label}>
            <span>{action.icon}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
export default TopNotification