type SelectBoxOpt = {
    code:string,
    label:string
}

type IRefCodeGroupSearchForm = {
    featCodeNo:string,
    codeGroupNo:string,
    activeStatusValue:string,
    usageStatusValue:string,
}
const initUsageStatusData:SelectBoxOpt[] = [
    {
        code:"Y",
        label:"Use"
    },
    {
        code:"N",
        label:"Not Use"
    },
]
const initFeatureCodeData:SelectBoxOpt[] = [
    {
        code:"INV",
        label:"Inventory"
    },
    {
        code:"DO",
        label:"Delivery Order"
    },
    {
        code:"FIN",
        label:"Finance"
    },
    {
        code:"HR",
        label:"Human Resources"
    },
]
export type {
    IRefCodeGroupSearchForm,
}

export {
    initFeatureCodeData,
    initUsageStatusData
}