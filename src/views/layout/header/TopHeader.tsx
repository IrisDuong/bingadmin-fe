import TopMultiLanguage from './TopMultiLanguage'
import TopNotification from './TopNotification'
import HeaderLogo from './HeaderLogo';
import AppBreadcrumb from '../AppBreadcrumb';

function TopHeader() {
  return (
    <div>
      <HeaderLogo />
      <div id="breadcrumb-wrapper">
        <AppBreadcrumb />
      </div>
      <div style={headerStyles.rightGroup}>
        <TopNotification />
        <TopMultiLanguage />
      </div>
    </div>
  )
}

const headerStyles = {
  rightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
}

export default TopHeader