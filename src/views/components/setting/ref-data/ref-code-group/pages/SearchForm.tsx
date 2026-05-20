import { Flex, Form, Select  } from 'antd';
import { useForm, Controller} from 'react-hook-form';
import type { SubmitHandler} from 'react-hook-form';
import type {IRefCodeGroupSearchForm} from "../context";
import  {initFeatureCodeData, initUsageStatusData} from "../context";
import { BtnSearch } from '../../../../common/CustomButton';

function SearchForm() {
    const{
         control,
         handleSubmit,
    } = useForm<IRefCodeGroupSearchForm>({
        defaultValues:{
        featCodeNo:initFeatureCodeData[0].code,
        codeGroupNo:"",
        activeStatusValue:"",
        usageStatusValue:initUsageStatusData[0].code,
        }
    })

    const handleSearch:SubmitHandler<IRefCodeGroupSearchForm> = data =>{
            console.log(data);
    }

  return (
        <Form
            onFinish={handleSubmit(handleSearch)}
            name="basic"
            layout='inline'
        >
            <Flex className="search-form-container">
                <Form.Item
                    label="Feature"
                >
                    <Controller
                        name="featCodeNo"
                        control={control}
                        render={({field})=>
                        <Select
                            {...field}
                            options={
                                initFeatureCodeData.map(e=>({value:e.code,label:e.label}))
                            }
                        />
                    }
                    >
                    </Controller>
                </Form.Item>
                <Form.Item
                    label="Usage"
                >
                    <Controller
                        name="usageStatusValue"
                        control={control}
                        render={({field})=>
                            <Select
                                {...field}
                                options={
                                    initUsageStatusData.map(e=>({value:e.code,label:e.label}))
                                }
                            />
                        }
                    
                    />
                </Form.Item>
                <Form.Item>
                    <BtnSearch
                    >
                    </BtnSearch>
                </Form.Item>
            </Flex>
        </Form>
  )
}

export default SearchForm