import axios from 'axios';
import { useEffect, useState } from 'react'

const useAjax = () => {

    const [data, setData] = useState([]);
    const [options, request] = useState({});
    console.log(options);
    useEffect(() => {
        async function ajaxCall() {

            try {
                const res = await axios(options);
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log(error)
                // setError(error);
            }
        }
        ajaxCall();
    }, [ options ]);
    console.log(data);
    return { data, request };
}

export default useAjax;











// const getItems = () => {
//     fetch(toDoAPI, {
//         method: 'Get',
//         mode: 'cors',
//     })
//     .then(data => data.json())
//     .then(data => setlist(data.results))
//     .catch(console.error);
// }

// useEffect(_getTodoItems, []);
// const _addItem = (item) => {
    // item.due = new Date();
//     fetch(todoAPI, {
//       method: 'Post',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(item)
//     })
//       .then(response => response.json())
//       .then(savedItem => {
//         setList([...list, savedItem])
//       })
//       .catch(console.error);
//   };