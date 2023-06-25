import React from "react";
import MyInput from "./MyInput.jsx";
import MySelect from "./MySelect.jsx";


const FilterPost = ({filter,setFilter}) => {

    return (
        <div>
            <MyInput
                style={{margin:'20px 0px'}}
                placeholder='Поиск по названию поста'
                value={filter.query}
                onChange={e =>setFilter({...filter,query : e.target.value}) }
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})  }
                defaultValue='Сортировка'
                options={[
                    {value:'title', name:'По названию'},
                    {value:'body', name:'По описанию'}
                ]}
            />
        </div>
    )
}
export default FilterPost