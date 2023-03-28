import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from './utils/Loader';
import Tooltip from './utils/Tooltip';

const Plants = () => {

  const authState = useSelector(state => state.authReducer);
  const [plants, setPlants] = useState([]);
  const [fetchData, { loading }] = useFetch();

  const fetchPlants = useCallback(() => {
    const config = { url: "/plants", method: "get", headers: { Authorization: authState.token } };
    fetchData(config, { showSuccessToast: false }).then(data => setPlants(data.plants));
  }, [authState.token, fetchData]);

  useEffect(() => {
    if (!authState.isLoggedIn) return;
    fetchPlants();
  }, [authState.isLoggedIn, fetchPlants]);


  const handleDelete = (id) => {
    const config = { url: `/plants/${id}`, method: "delete", headers: { Authorization: authState.token } };
    fetchData(config).then(() => fetchPlants());
  }


  return (
    <>
      <div className="my-2 mx-auto max-w-[700px] py-4">

        {plants.length !== 0 && <h2 className='my-2 ml-2 md:ml-0 text-xl'>Your plants ({plants.length})</h2>}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {plants.length === 0 ? (

              <div className='w-[600px] h-[300px] flex items-center justify-center gap-4'>
                <span>No plants found</span>
                <Link to="/plants/add" className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2">+ Add new plant </Link>
              </div>

            ) : (
              plants.map((plant, index) => (
                <div key={plant._id} className='bg-white my-4 p-4 text-gray-600 rounded-md shadow-md'>
                  <div className='flex'>

                    <span className='font-medium'>Plant #{index + 1}</span>

                    <Tooltip text={"Edit this plant"} position={"top"}>
                      <Link to={`/plants/${plant._id}`} className='ml-auto mr-2 text-green-600 cursor-pointer'>
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </Tooltip>

                    <Tooltip text={"Delete this plant"} position={"top"}>
                      <span className='text-red-500 cursor-pointer' onClick={() => handleDelete(plant._id)}>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </Tooltip>

                  </div>
                  <div className='whitespace-pre'>{plant.description}</div>
                </div>
              ))

            )}
          </div>
        )}
      </div>
    </>
  )

}

export default Plants