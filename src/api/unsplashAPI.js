import Unsplash from 'unsplash-js';


export const unsplash = new Unsplash({
 accessKey: "I3XS2sLwyTsq6y9jIYS-81GMiROF08MlTIq-QJXtFk0",
 secret: "5xRRp60ybWFznBgG5I1zULyklZV7JOa1K7bP-TkQ0Cg",
 callbackUrl: 'http://feodora.name/home'
})

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
 'public',
 'write_likes'
])
