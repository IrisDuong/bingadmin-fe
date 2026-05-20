import { useState } from 'react';
import { Space, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import type {MenuProps} from 'antd';
import VN_FLAG from "../../../public/images/vietnam_flag_01.png";
import EN_FLAG from "../../../public/images/en_flag_01.png";
function TopMultiLanguage() {
    const languages = [
        {
            key:'vi',
            name:'Việt Nam',
            flag:VN_FLAG
        },
        {
            key:'en',
            name:'English',
            flag:EN_FLAG
        }
    ]
    const dropdownItems:MenuProps['items'] = languages.map((lang)=>{
        return {
            key: lang.key,
            label: lang.name
        }
    })

    const [selectedLanguage,setSelectedLanguage] = useState(languages[0]);

    const handleChange:MenuProps['onClick'] = ({key})=>{
        let language = languages.filter(e=>e.key == key)[0]
        setSelectedLanguage(language)
    }
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Dropdown
            menu={{items:dropdownItems,onClick:handleChange}}
        >
            <Space style={{ alignItems: 'center', cursor: 'pointer', lineHeight: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img
                        width={25}
                        height={25}
                        src={selectedLanguage?.flag}
                        style={{ borderRadius: '50%', display: 'block' }}
                        alt={`${selectedLanguage?.name} flag`}
                    />
                    <span style={{ minWidth: '70px', display: 'inline-block' }}>{selectedLanguage?.name}</span>
                </div>
                <CaretDownOutlined style={{ fontSize: '14px' }} />
            </Space>
        </Dropdown>
    </div>
  )
}

export default TopMultiLanguage