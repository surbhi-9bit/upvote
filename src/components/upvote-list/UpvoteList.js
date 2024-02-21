import React, { useContext, useEffect, useState } from 'react';
import Upvote from '../upvote/Upvote';
import plusIcon from '../../assets/plus.svg';

import './UpvoteList.css';

const UpvoteList = ({ item, changeHandler }) => {
  const upvoteStateLocalStorage = localStorage.getItem(`upvote-item-${item.id}`)
  const localStorageState = localStorage.getItem(upvoteStateLocalStorage) ? JSON.parse(upvoteStateLocalStorage) : (item.selected || false);
  const [selected, setSelected] = useState(localStorageState);
  const [upvoteItemArray, setUpvoteItemArray] = useState([]);

  useEffect(() => {
    localStorage.setItem(`upvote-item-${item.id}`, JSON.stringify(selected))
  }, [item, selected])

  useEffect(() => {
    setSelected(localStorageState)
    changeHandler({id:item.id, selected: selected})
  }, [localStorageState, selected])
  
  const onClickHandler = () => {
    setSelected(!selected);
  };

  const onAddBtnClick = (e) => {
    setUpvoteItemArray((oldUpvoteArray) => [
      ...oldUpvoteArray,
      'upVote' + oldUpvoteArray.length,
    ]);
  };
  return (
    <div className={'upvoteListsContainer'}>
      <div key={item.id} className={'upvoteGroup'}>
        {upvoteItemArray.map((item, index) => {
          return (
            <Upvote
              key={index}
              selected={selected}
              toggleSelected={onClickHandler}
            />
          );
        })}
      </div>
      <div className={'plusIcon'} onClick={onAddBtnClick}>
        <img src={plusIcon} alt="Add button" />
      </div>
    </div>
  );
};

export default UpvoteList;
