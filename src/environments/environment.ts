// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export const studentsUrl =
  'https://angularcasestudy-3becd-default-rtdb.firebaseio.com/students.json';

export const productUrl =
  'https://angularcasestudy-3becd-default-rtdb.firebaseio.com/posts.json';

const productType = 'product';
const productCount = 40;
export const imageAuthorizationKey = '563492ad6f91700001000001efb5cd6631104793b4ba1cd02d1ac274'

export const productImagesUrl = `https://api.pexels.com/v1/search?query=${productType}&page=1&per_page=${productCount}`;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
