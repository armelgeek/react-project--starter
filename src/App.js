import './App.css';
import {useGetter,useDispatch} from './store';
function App() {
  const loading = useGetter('empty','isLoading');
  const items = useGetter('empty','items');
  const setLoading = useDispatch('empty','setLoading');
  const addItem = useDispatch('empty','addItem');
  const addItems = useDispatch('empty','addItems');
  const insertItem = useDispatch('empty','insertItem');
  const removeItemByIndex = useDispatch('empty','removeItemByIndex');
  const removeItemByKey = useDispatch('empty','removeItemByKey');
  const removeItemsByKey = useDispatch('empty','removeItemsByKey');
  const updateItem = useDispatch('empty','updateItem');
  const updateItemByKey = useDispatch('empty','updateItemByKey');
  const updateItemsByKey = useDispatch('empty','updateItemsByKey');

  return (
    <div className="App">
     <h1 className="text-3xl font-bold underline">
        Noob Noob,You are Noob
        <div className="mb-3"> </div>
        {loading ? 'yes':'no'}
      </h1>
      <button className="p-3" onClick={setLoading}>Set no</button>
      <button className="p-3" onClick={()=>{
        addItems([{
                          id:1,
                          name: 'name 1'
                        },{
                  id:2,
                  name: 'name 2'
                },{
                  id:3,
                  name: 'name 3'
                },{
                  id:4,
                  name: 'name 4'
                },{
                  id:5,
                  name: 'name 5'
                }])
      }}>addItem</button>

        <button className="p-3" onClick={()=>{
        insertItem({item:{
                          id: 'fiai',
                          name: 'fiai'
                        },index: 2})
      }}>insertInto</button>

       <button className="p-3" onClick={()=>{
        removeItemsByKey({
          items:[
            {
                  id:2,
                  name: 'name 2'
                },
                {
                  id:3,
                  name: 'name 3'
                }
          ],
          key:'id' 
        })
      }}>Remove all</button>
<button className="p-3" onClick={()=>{
  updateItem({
    item:{
      name: 'la vie de wanes'
    },
    index: 2
  })
}}>Update item</button>


          <button onClick={()=>updateItemByKey({
            key: 'id',
            item: {
              id: 3,
              name: 'mamy'
            }
          })}>update it</button>



          <button className="p-3" onClick={()=>{
        updateItemsByKey({
          items:[
            {
                  id:2,
                  name: 'nouvlelement 2'
                },
                {
                  id:3,
                  name: 'nouvelement modifié 3'
                }
          ],
          key:'id' 
        })
      }}>update all</button>
      {items.map((i,index) =>(
        <div key={i.id}>{i.name}
          <button onClick={()=>removeItemByIndex(index)}>Remove by index</button>
          
          <button onClick={()=>removeItemByKey({
            item:i,
            key:'id'
          })}>Remove by key</button>

        </div>
      ))}
    </div>
  );
}

export default App;
