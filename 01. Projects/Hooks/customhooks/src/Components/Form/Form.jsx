import React, {useState} from 'react'

function Form() {
    const [name, setName] = useState('')
    const [select, setSelect] = useState('')
    const [ list, setList] = useState([])
    const [formDetails, setFormDetails] = useState({title:'', desc:''})

    const handleInput = (event)=>{

    }
    const handleList =()=>{
        setList([...list, name])
    }
  
  return (
    <div>
        <input type='text' value={formDetails.title} name ='title' onChange={handleInput}/>
        <input type ='text' value ={formDetails.desc} name='desc' onChange={handleInput}></input>
        <label>
          Pick your favorite flavor:
          <select value={select} onChange={handleInput}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <button onClick={handleList}>submit</button>
        {list.length === 0 ? (<h1>No items</h1>):
        list.map((l)=>{
           return (<h1>{l}</h1>)
        })
        }
    </div>
  )
}

export default Form