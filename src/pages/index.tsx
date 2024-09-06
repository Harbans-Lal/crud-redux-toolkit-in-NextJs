// Home.js
import React, {useContext, useEffect, useState} from 'react';
import { Button, Display } from '@fluentui/react-components';
import { AbilityContext } from '@/casl/abilityFor';
import { Can } from '@/casl/abilityFor';
import defineAbilitiesFor from '@/casl/abilityFor';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost , deletePost, getSinglepost} from '@/Redux/postsSlice';
import AddForm from '@/views/AddForm';
import EditForm from '@/views/EditForm';
import { Warning } from 'postcss';

const Home = () => {
  const dispatch = useDispatch();
  const postData = useSelector((data:any) => data.postReducer)
  // console.log(postData , "all postData > > ")
  const {posts} = postData;
const {singlepost} = postData;
  // const {ability} = useContext(AbilityContext);
  const [isAbleToRead, setIsAbleToRead] = useState(false)
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);
  const [singlePost, setSinglePost] = useState();

  useEffect(() =>{
    const whoAmI:string = 'admin';
    const role = defineAbilitiesFor(whoAmI)
    setIsAbleToRead(role.can('read','post'));
    setIsAbleToDelete(role.can('delete','post'));
    dispatch(fetchPost());
  
  },[])

  const handleClick = (id) =>{
    dispatch(getSinglepost(id))
  }
 return(
    <div>
     {isAbleToRead && <Display>You can read it </Display>}
      <Can not I="read" this="post">
        <h1>YOu are not allowed to see the content !!</h1>
      </Can>

      {posts?.map(item =>{
        return (
          <div className='ml-7' key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <Button appearance="warning" onClick={()=>dispatch(deletePost(item.id))}>Delete</Button>
            <Button onClick={() => handleClick(item.id)}>Edit</Button>
          </div>
        )
      })}
    <div className='flex justify-around'>
      <AddForm />
      <EditForm />
    </div>
     
    </div>
 );
};

export default Home;
