import axios from 'axios';

export const getRunningText = () => {
  return axios.get('data.json')
    .then(res => res.data.runningText)
    .catch(err => err)
}

export const getFeaturedProperties = () => {
  return axios.get('data.json')
    .then(res => res.data.featuredProperties)
    .catch(err => err)
}

export const getReviews = () => {
  return axios.get('data.json')
    .then(res => res.data.reviews)
    .catch(err => err)
}

export const getPlaces = (place) => {
  return axios.get('data.json')
    .then(res => res.data.places.filter(item => {
      if(item.name.includes(place)){
        return true
      } else {
        return false
      }
    }))
    .catch(err => err)
}
