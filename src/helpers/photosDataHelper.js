import dateFormat from '../helpers/photoDateFormat.js'

const photosDataHelper = photoData => {
 return photoData.map(photo => {
   return ({
     id: photo.id,
     isLiked: photo ? photo.liked_by_user : false,
     created: photo ? dateFormat(photo.created_at) : '',
     photoImgSmall: photo && photo.urls ? photo.urls.small : '#',
     photoImgRegular: photo && photo.urls ? photo.urls.regular : '#',
     likes: photo ? photo.likes : 0,
     authorName: photo && photo.user ? photo.user.name : '',
     authorUserName: photo && photo.user ? photo.user.username : '',
     authorProfileLink: photo && photo.user && photo.user.links ? photo.user.links.html : '#',
     authorProfileAvatar: photo && photo.user && photo.user.profile_image
       ? photo.user.profile_image.small : '#',
   })
 })
}

export default photosDataHelper
