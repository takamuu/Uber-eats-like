import React, { Fragment, useEffect } from 'react';

// apis
import { fetchFoods } from '../apis/foods';

export const Foods = ({
  match
}) => {
  useEffect(() => {
    fetchFoods(match.params.restaurantsId)
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Fragment>
      フード一覧
    </Fragment>
  )
}